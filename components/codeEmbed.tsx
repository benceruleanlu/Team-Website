"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

interface CodeBlockProps {
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language }) => {
  const [selected, setSelected] = useState<string>(language);

  useEffect(() => {
    Prism.highlightAll();
  }, [selected]);

  return (
    <>
      <pre className="!m-0 !overflow-hidden !bg-[#050505]">
        {selected === "Java" && (
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
    }
}`}
          </code>
        )}
        {selected === "Next.js" && (
          <code className="language-tsx">
            {`import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"`}
          </code>
        )}
        {selected === "React Native" && (
          <code className="language-tsx">
            {`const DropdownInput = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) => (
  <View style={styles.criteriaContainer}>
    <Text style={styles.criteriaText}>{label}</Text>
    <View style={{
      borderWidth: 1,
      borderColor: '#fff',
      marginTop: 10,
      height: Platform.OS === 'ios' ? 60 : undefined,
      overflow: Platform.OS === 'ios' ? 'hidden' : undefined,
      justifyContent: Platform.OS === 'ios' ? 'center' : undefined,
    }}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        style={{color: '#fff'}}
        dropdownIconColor={'#fff'}
      >
        {options.map((option, index) => (
          <Picker.Item
            key={index}
            label={option}
            value={option}
            color={Platform.OS === 'ios' ? "#fff" : undefined}
          />
        ))}
      </Picker>
    </View>
  </View>
);`}
          </code>
        )}
      </pre>
    </>
  );
};

export default CodeBlock;
