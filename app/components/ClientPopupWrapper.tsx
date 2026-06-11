"use client";

import { useEffect, useState } from "react";
import WorldCupPopup from "./WorldCupPopup";
import TelegramPopup from "./TelegramPopup";

interface ClientPopupWrapperProps {
  showPopup: boolean;
  disableWcPopup: boolean;
  disableTgPopup: boolean;
}

export default function ClientPopupWrapper({
  showPopup,
  disableWcPopup,
  disableTgPopup,
}: ClientPopupWrapperProps) {
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    if (!showPopup) return;

    try {
      const lastShown = localStorage.getItem("iptv_popup_last_shown_time");
      const now = Date.now();
      const tenMinutes = 10 * 60 * 1000; // 10 minutes
      const shouldShow = !lastShown || now - parseInt(lastShown, 10) > tenMinutes;

      if (shouldShow) {
        localStorage.setItem("iptv_popup_last_shown_time", now.toString());
      }

      // Defer state update to avoid synchronous cascading render warning in ESLint
      setTimeout(() => {
        setCanShow(shouldShow);
      }, 0);
    } catch {
      // Fallback if localStorage is unavailable
      setTimeout(() => {
        setCanShow(true);
      }, 0);
    }
  }, [showPopup]);

  if (!showPopup || !canShow) return null;

  return (
    <>
      {!disableWcPopup && <WorldCupPopup showPopup={showPopup} />}
      {!disableTgPopup && <TelegramPopup showPopup={showPopup} />}
    </>
  );
}
