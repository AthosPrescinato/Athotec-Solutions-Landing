export default class Colors {
  // Paleta principal (nomes em camelCase; podem ser acessados como Colors.background, etc.)
  static backgroundPage = "#141618ff"; // Background-color
  static backgroundOptions = "#222629"; // Background-color
  static textPrimary = "#ffc506"; // Text-primary
  static textSecondary = "#777777";
  static buttonPrimary = "#b6ac1dff"; // button_primary
  static buttonPrimaryHover = "#1D4ED8";
  static buttonSecondary = "#10B981"; // button_secondary
  static accent = "#F59E0B";
  static border = "#4f4f47";
  static white = "#FFFFFF";
  static black = "#000000";

  // Retorna um objeto com variáveis CSS tipo --background-color
  static getCssVariables() {
    return {
      "--background-page-color": Colors.backgroundPage,
      "--text-primary": Colors.textPrimary,
      "--text-secondary": Colors.textSecondary,
      "--button-primary": Colors.buttonPrimary,
      "--button-primary-hover": Colors.buttonPrimaryHover,
      "--button-secondary": Colors.buttonSecondary,
      "--accent": Colors.accent,
      "--border": Colors.border,
      "--white": Colors.white,
      "--black": Colors.black,
    };
  }

  // Método opcional para injetar as variáveis no :root
  static injectToRoot() {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const vars = Colors.getCssVariables();
    Object.keys(vars).forEach((key) => {
      root.style.setProperty(key, vars[key]);
    });
  }
}
