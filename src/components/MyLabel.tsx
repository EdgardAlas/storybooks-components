import './mylabel.css';

type Sizes = 'normal' | 'h1' | 'h2' | 'h3';

export interface Props {
  /**
   * Text por defecto de la etiqueta
   */
  label: string;
  /**
   * Tamaño por defecto de la etiqueta
   */
  size: Sizes;
  /**
   * Color de la etiqueta
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Letras capitalizadas
   */
  allCaps?: boolean;
  /**
   * Color de fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor ? fontColor : '' }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
