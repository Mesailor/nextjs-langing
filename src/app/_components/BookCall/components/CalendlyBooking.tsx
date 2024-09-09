"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import { calendlyConfig } from "../content";

export function CalendlyBooking() {
  return (
    <InlineWidget url={calendlyConfig.url} styles={calendlyConfig.styles} />
  );
}

// https://www.npmjs.com/package/react-calendly
