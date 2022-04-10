import './mylabel.css';
declare type Sizes = 'normal' | 'h1' | 'h2' | 'h3';
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
    /**
     * Color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: Props) => JSX.Element;
export {};
