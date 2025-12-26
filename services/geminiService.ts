
import { GoogleGenAI, Type } from "@google/genai";

// Use the named parameter and direct process.env.API_KEY for initialization as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateEnigmaTrivia = async () => {
  // Use systemInstruction for defining the persona and formatting constraints.
  const systemInstruction = `Actúa como un sistema experto hipotecario. Genera un enigma corto del tipo "¿Quién soy?" o "¿En qué estado estoy?" basado estrictamente en el historial crediticio de Infocorp (NOR, CPP, DEF, DUD, PER) o los pilares (Capacidad, Comportamiento, Capital). 
  Devuelve la respuesta en formato JSON con los campos: "clue" (el enigma), "answer" (la categoría o pilar correcto, ej: "CPP"), y "explanation" (una breve explicación profesional de por qué es esa respuesta y cómo la IA ayuda a simplificar este análisis).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Genera un nuevo enigma hipotecario relacionado con los pilares del crédito o categorías de Infocorp.",
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            clue: { 
              type: Type.STRING,
              description: "El enigma o acertijo corto."
            },
            answer: { 
              type: Type.STRING,
              description: "La respuesta técnica esperada."
            },
            explanation: { 
              type: Type.STRING,
              description: "Explicación profesional detallada."
            },
          },
          required: ["clue", "answer", "explanation"]
        }
      }
    });

    // Directly access the .text property from the response object.
    const jsonStr = response.text || "{}";
    return JSON.parse(jsonStr.trim());
  } catch (error) {
    console.error("Error generating trivia:", error);
    // Robust fallback to maintain application usability.
    return {
      clue: "Tengo retrasos menores en mis pagos, según Infocorp, ¿cuál es mi categoría?",
      answer: "CPP",
      explanation: "CPP (Con Problemas Potenciales) indica retrasos leves. La IA permite analizar reportes de Infocorp rápidamente para identificar estos riesgos antes de enviar al banco."
    };
  }
};
