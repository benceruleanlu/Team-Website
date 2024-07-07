"use client"

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';

const CodeBlock = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className='max-h-[60vh] overflow-y-auto rounded-3xl !bg-[#050505] border border-[#d6ebfd30] border p-4 line-numbers'>
      <code className="language-java">
        {`package ca.team4308.absolutelib.control;

import ca.team4308.absolutelib.math.Vector2;
import ca.team4308.absolutelib.math.DoubleUtils;

public class JoystickHelper {
    public static Vector2 SlopedScaledAxialDeadzone(Vector2 stickInput, double deadzone) {
        double deadzoneX = deadzone * Math.abs(stickInput.y);
        double deadzoneY = deadzone * Math.abs(stickInput.x);

        Vector2 result = new Vector2(0.0, 0.0);
        Vector2 sign = new Vector2(Math.signum(stickInput.x), Math.signum(stickInput.y));

        if (Math.abs(stickInput.x) > deadzoneX) {
            result.x = sign.x * DoubleUtils.mapRangeNew(Math.abs(stickInput.x), deadzoneX, 1, 0, 1);
        }
        if (Math.abs(stickInput.y) > deadzoneY) {
            result.y = sign.y * DoubleUtils.mapRangeNew(Math.abs(stickInput.y), deadzoneY, 1, 0, 1);
        }
        return result;
    }

    public static Vector2 ScaledRadialDeadzone(Vector2 stickInput, double deadzone) {
        double inputMagnitude = stickInput.magnitude();
        if (inputMagnitude < deadzone) {
            return new Vector2(0.0, 0.0);
        } else {
            double legalRange = 1.0 - deadzone;
            double normalizedMag = Math.min(1.0, (inputMagnitude - deadzone) / legalRange);
            double scale = normalizedMag / inputMagnitude;
            return new Vector2(stickInput.normalize().x * scale, stickInput.normalize().y * scale);
        }
    }`}
      </code>
    </pre>
  );
};

export default CodeBlock;