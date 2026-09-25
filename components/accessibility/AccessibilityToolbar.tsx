"use client";

import { useEffect, useRef, useState } from "react";

type FontScale = "100" | "125" | "150";

type Preferences = {
  fontScale: FontScale;
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  legibleFont: boolean;
  textSpacing: boolean;
  reduceMotion: boolean;
};

const storageKey = "eltabo-accessibility-preferences";

const defaultPreferences: Preferences = {
  fontScale: "100",
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  legibleFont: false,
  textSpacing: false,
  reduceMotion: false,
};

const toggleOptions: Array<{
  key: Exclude<keyof Preferences, "fontScale">;
  label: string;
  description: string;
}> = [
  {
    key: "highContrast",
    label: "Alto contraste",
    description: "Usa fondo oscuro y colores de alto contraste.",
  },
  {
    key: "grayscale",
    label: "Escala de grises",
    description: "Elimina el color de las imágenes.",
  },
  {
    key: "underlineLinks",
    label: "Subrayar enlaces",
    description: "Distingue los enlaces sin depender solo del color.",
  },
  {
    key: "legibleFont",
    label: "Fuente legible",
    description: "Cambia el texto a una tipografía de alta legibilidad.",
  },
  {
    key: "textSpacing",
    label: "Espaciado de texto",
    description: "Aumenta el espacio entre líneas, palabras y caracteres.",
  },
  {
    key: "reduceMotion",
    label: "Reducir movimiento",
    description: "Detiene animaciones y transiciones no esenciales.",
  },
];

function applyPreferences(preferences: Preferences) {
  const root = document.documentElement;
  root.dataset.fontScale = preferences.fontScale;
  root.dataset.contrast = preferences.highContrast ? "high" : "normal";
  root.dataset.grayscale = String(preferences.grayscale);
  root.dataset.underlineLinks = String(preferences.underlineLinks);
  root.dataset.legibleFont = String(preferences.legibleFont);
  root.dataset.textSpacing = String(preferences.textSpacing);
  root.dataset.reduceMotion = String(preferences.reduceMotion);
}

export default function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [status, setStatus] = useState("Preferencias de accesibilidad listas.");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let nextPreferences = defaultPreferences;

    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        nextPreferences = { ...defaultPreferences, ...JSON.parse(saved) } as Preferences;
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }

    if (
      !nextPreferences.reduceMotion &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nextPreferences = { ...nextPreferences, reduceMotion: true };
    }

    applyPreferences(nextPreferences);
    const frame = window.requestAnimationFrame(() => setPreferences(nextPreferences));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeWithEscape);
    return () => document.removeEventListener("keydown", closeWithEscape);
  }, []);

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  function closePanel() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function updatePreferences(next: Preferences, message: string) {
    setPreferences(next);
    applyPreferences(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    setStatus(message);
  }

  function toggle(key: Exclude<keyof Preferences, "fontScale">, label: string) {
    const enabled = !preferences[key];
    updatePreferences(
      { ...preferences, [key]: enabled },
      `${label} ${enabled ? "activado" : "desactivado"}.`
    );
  }

  function reset() {
    updatePreferences(defaultPreferences, "Preferencias restablecidas.");
  }

  return (
    <div className="accessibility-toolbar fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <section
          id="panel-accesibilidad"
          aria-labelledby="titulo-accesibilidad"
          className="max-h-[calc(100vh-100px)] w-[min(360px,calc(100vw-32px))] overflow-y-auto rounded-3xl border-2 border-[#00174a] bg-white p-5 text-slate-900 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="titulo-accesibilidad" className="text-xl font-black text-[#00174a]">
                Opciones de accesibilidad
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                Personaliza la presentación según tus necesidades.
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closePanel}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-slate-300 bg-white text-xl font-black text-[#00174a]"
              aria-label="Cerrar opciones de accesibilidad"
            >
              ×
            </button>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-black text-[#00174a]">Tamaño del texto</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(["100", "125", "150"] as FontScale[]).map((size) => (
                <button
                  key={size}
                  type="button"
                  aria-pressed={preferences.fontScale === size}
                  onClick={() =>
                    updatePreferences(
                      { ...preferences, fontScale: size },
                      `Tamaño del texto ajustado a ${size} por ciento.`
                    )
                  }
                  className={`rounded-xl border-2 px-3 py-2 font-black ${
                    preferences.fontScale === size
                      ? "border-blue-800 bg-blue-800 text-white"
                      : "border-slate-300 bg-white text-[#00174a]"
                  }`}
                >
                  {size}%
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-4 grid gap-2">
            {toggleOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                aria-pressed={preferences[option.key]}
                onClick={() => toggle(option.key, option.label)}
                className={`rounded-2xl border-2 p-3 text-left transition ${
                  preferences[option.key]
                    ? "border-blue-800 bg-blue-50 text-[#00174a]"
                    : "border-slate-200 bg-white text-slate-800"
                }`}
              >
                <span className="flex items-center justify-between gap-3 font-black">
                  {option.label}
                  <span aria-hidden="true">{preferences[option.key] ? "Sí" : "No"}</span>
                </span>
                <span className="mt-1 block text-xs leading-relaxed">{option.description}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-4 w-full rounded-xl border-2 border-[#00174a] bg-white px-4 py-3 font-black text-[#00174a]"
          >
            Restablecer preferencias
          </button>
        </section>
      )}

      <p className="sr-only" role="status" aria-live="polite">
        {status}
      </p>

      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="panel-accesibilidad"
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-12 items-center gap-3 rounded-full border-2 border-white bg-[#00174a] px-5 py-3 font-black text-white shadow-2xl"
      >
        <span aria-hidden="true" className="text-xl">♿</span>
        Accesibilidad
      </button>
    </div>
  );
}
