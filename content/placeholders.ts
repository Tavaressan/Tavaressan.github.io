// Marcadores explícitos para o que ainda não foi confirmado: nunca preencher com conteúdo inventado
export const CONTENT_REQUIRED = "[CONTENT REQUIRED]";
export const RESULT_NOT_MEASURED = "[RESULT NOT MEASURED]";
export const LINK_REQUIRED = "[LINK REQUIRED]";
export const STATUS_REQUIRED = "[STATUS REQUIRED]";

export const isPlaceholder = (value: string | undefined) =>
  !value || /^\[[A-Z ]+\]$/.test(value.trim());
