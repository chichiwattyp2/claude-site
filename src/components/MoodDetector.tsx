'use client';

import { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import { DetectedMood, FacialExpression } from '@/types';
import { analyzeMood, getMoodDescription, getMoodEmoji } from '@/lib/moodAnalysis';
import { Camera, CameraOff, Loader2 } from 'lucide-react';

interface MoodDetectorProps {
  onMoodDetected: (mood: DetectedMood) => void;
}

export default function MoodDetector({ onMoodDetected }: MoodDetectorProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentMood, setCurrentMood] = useState<DetectedMood | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const detectionInterval = useRef<NodeJS.Timeout | null>(null);

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      try {
        setIsLoading(true);
        const MODEL_URL = '/models'; // You'll need to add face-api.js models to public/models

        // Load required models for face detection and expression recognition
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);

        setIsLoading(false);
      } catch (err) {
        console.error('Error loading models:', err);
        setError('Failed to load AI models. Please refresh the page.');
        setIsLoading(false);
      }
    };

    loadModels();
  }, []);

  // Start webcam
  const startVideo = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsActive(true);
        setError(null);
      }
    } catch (err) {
      console.error('Error accessing webcam:', err);
      setError('Could not access your camera. Please allow camera permissions.');
    }
  };

  // Stop webcam
  const stopVideo = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    if (detectionInterval.current) {
      clearInterval(detectionInterval.current);
    }
    setIsActive(false);
  };

  // Detect mood from video
  const detectMood = async () => {
    if (
      !videoRef.current ||
      !canvasRef.current ||
      videoRef.current.paused ||
      videoRef.current.ended
    ) {
      return;
    }

    const detections = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections && detections.expressions) {
      const expressions: FacialExpression = {
        neutral: detections.expressions.neutral,
        happy: detections.expressions.happy,
        sad: detections.expressions.sad,
        angry: detections.expressions.angry,
        fearful: detections.expressions.fearful,
        disgusted: detections.expressions.disgusted,
        surprised: detections.expressions.surprised,
      };

      const mood = analyzeMood(expressions);
      setCurrentMood(mood);
      onMoodDetected(mood);

      // Draw detections on canvas
      const canvas = canvasRef.current;
      const displaySize = {
        width: videoRef.current.videoWidth,
        height: videoRef.current.videoHeight,
      };
      faceapi.matchDimensions(canvas, displaySize);

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, [resizedDetections]);
      }
    }
  };

  // Start continuous detection
  useEffect(() => {
    if (isActive && !isLoading) {
      detectionInterval.current = setInterval(detectMood, 1000); // Detect every second
    }

    return () => {
      if (detectionInterval.current) {
        clearInterval(detectionInterval.current);
      }
    };
  }, [isActive, isLoading]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopVideo();
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mood Detection Camera
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Video Container */}
        <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-auto"
            onLoadedMetadata={() => {
              if (canvasRef.current && videoRef.current) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
              }
            }}
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />

          {!isActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
              <CameraOff className="w-16 h-16 text-gray-600" />
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-3 mb-4">
          {!isActive ? (
            <button
              onClick={startVideo}
              disabled={isLoading}
              className="flex-1 bg-cannabis-600 text-white py-3 rounded-lg font-medium hover:bg-cannabis-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading AI...
                </>
              ) : (
                <>
                  <Camera className="w-5 h-5" />
                  Start Camera
                </>
              )}
            </button>
          ) : (
            <button
              onClick={stopVideo}
              className="flex-1 bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <CameraOff className="w-5 h-5" />
              Stop Camera
            </button>
          )}
        </div>

        {/* Mood Display */}
        {currentMood && (
          <div className="bg-gradient-to-r from-cannabis-50 to-cannabis-100 p-6 rounded-lg border-2 border-cannabis-300">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-5xl">{getMoodEmoji(currentMood.primary)}</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 capitalize">
                  {currentMood.primary}
                </h3>
                <p className="text-sm text-gray-600">
                  Confidence: {(currentMood.confidence * 100).toFixed(0)}%
                </p>
              </div>
            </div>
            <p className="text-gray-700">{getMoodDescription(currentMood.primary)}</p>
          </div>
        )}

        <p className="text-sm text-gray-500 mt-4 text-center">
          Your privacy is important. All processing happens locally in your browser.
        </p>
      </div>
    </div>
  );
}
