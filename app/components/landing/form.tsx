"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Alert } from "@heroui/alert";
import { TextField, Snackbar, Alert as MuiAlert } from "@mui/material";
import { TruckIcon, CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");
  const [openToast, setOpenToast] = useState(false);

  const validateEmail = (value: string): string => {
    if (!value) {
      return "El correo es obligatorio";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return "Por favor, ingresá un correo válido (ejemplo@dominio.com)";
    }
    if (value.length > 254) {
      return "El correo es demasiado largo";
    }
    if (/[.]{2,}/.test(value) || /[@]{2,}/.test(value)) {
      return "El correo no puede contener múltiples '@' o puntos consecutivos";
    }
    if (/^[!#$%^&*()+=[\]{}|;:,<>?]+$/.test(value)) {
      return "El correo no puede consistir solo en caracteres especiales";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormState("success");
      setOpenToast(true);
      setEmail("");
      setEmailError("");
    } catch (error) {
      setFormState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };

  return (
    <div className="my-8">
      <Card className="w-full max-w-md mx-auto border-0 shadow-md rounded-xl bg-white">
        <CardHeader className="bg-gradient-to-r from-[#002B5B] to-[#005a9e] text-white rounded-t-xl px-6 py-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <TruckIcon className="h-6 w-6 text-white" />
              <h2 className="text-lg font-bold tracking-tight">
                Mantenete Actualizado en Camionar
              </h2>
            </div>
            <p className="text-gray-100 text-sm leading-relaxed">
              Recibí noticias de Camionar subscribiéndote a nuestro newsletter
            </p>
          </div>
        </CardHeader>
        <div className="px-6 pt-6 pb-4">
          {formState === "success" ? (
            <Alert className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 flex items-center gap-3">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">¡Gracias por subscribirte! Pronto recibirás nuestras novedades.</span>
            </Alert>
          ) : formState === "error" ? (
            <Alert className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 flex items-center gap-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium">Hubo un error al subscribirte. Por favor, intentá de nuevo.</span>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                type="email"
                placeholder="Tu correo"
                value={email}
                onChange={handleEmailChange}
                required
                fullWidth
                variant="outlined"
                error={!!emailError}
                helperText={emailError}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    "& fieldset": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#002B5B",
                      boxShadow: "0 0 0 2px rgba(0, 43, 91, 0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 12px",
                    color: "#111827",
                    fontSize: "0.875rem",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "#b91c1c",
                    fontSize: "0.75rem",
                    marginTop: "4px",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#9ca3af",
                    opacity: 1,
                  },
                }}
              />
            </form>
          )}
        </div>
        <CardFooter className="flex flex-col space-y-3 px-6 pb-6">
          {formState === "idle" && (
            <Button
              type="submit"
              disabled={isSubmitting || !email || !!emailError}
              className={`w-full px-4 py-2 rounded-lg text-white font-semibold text-base transition-all duration-300 ${
                isSubmitting || !email || !!emailError
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#002B5B] hover:bg-[#004080] hover:shadow-sm"
              }`}
            >
              {isSubmitting ? "Subscribiendo..." : "Subscribite"}
            </Button>
          )}
          <p className="text-xs text-gray-500 text-center font-light">
            Respetamos tu privacidad. Desuscribite cuando quieras.
          </p>
        </CardFooter>
      </Card>
      <Snackbar
        open={openToast}
        autoHideDuration={4000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleToastClose}
          severity="success"
          sx={{
            backgroundColor: "#f0fdf4",
            color: "#15803d",
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            "& .MuiAlert-icon": {
              color: "#15803d",
            },
          }}
        >
          Felicitaciones! Te enviaremos notificaciones relacionadas a Camionar
        </MuiAlert>
      </Snackbar>
    </div>
  );
}