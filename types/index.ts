export enum KeydownKeys {
  Enter = "Enter",
  Escape = "Escape",
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  Space = " ",
  Tab = "Tab",
  Shift = "Shift",
  Control = "Control",
  Alt = "Alt",
  Backspace = "Backspace",
  Delete = "Delete",
  Home = "Home",
  End = "End",
  PageUp = "PageUp",
  PageDown = "PageDown",
  F1 = "F1",
  F2 = "F2",
  F3 = "F3",
  F4 = "F4",
  F5 = "F5",
  F6 = "F6",
  F7 = "F7",
  F8 = "F8",
  F9 = "F9",
  F10 = "F10",
  F11 = "F11",
  F12 = "F12",
}

export enum EventListeners {
  // Mouse Events
  Click = "click",
  DoubleClick = "dblclick",
  MouseDown = "mousedown",
  MouseUp = "mouseup",
  MouseMove = "mousemove",
  MouseEnter = "mouseenter",
  MouseLeave = "mouseleave",
  MouseOver = "mouseover",
  MouseOut = "mouseout",
  ContextMenu = "contextmenu",

  // Keyboard Events
  KeyDown = "keydown",
  KeyUp = "keyup",
  KeyPress = "keypress",

  // Form Events
  Change = "change",
  Input = "input",
  Submit = "submit",
  Focus = "focus",
  Blur = "blur",
  Reset = "reset",

  // Clipboard Events
  Copy = "copy",
  Cut = "cut",
  Paste = "paste",

  // Touch Events
  TouchStart = "touchstart",
  TouchMove = "touchmove",
  TouchEnd = "touchend",
  TouchCancel = "touchcancel",

  // Drag and Drop Events
  Drag = "drag",
  DragStart = "dragstart",
  DragEnd = "dragend",
  DragEnter = "dragenter",
  DragLeave = "dragleave",
  DragOver = "dragover",
  Drop = "drop",

  // Focus Events
  FocusIn = "focusin",
  FocusOut = "focusout",

  // UI Events
  Scroll = "scroll",
  Resize = "resize",

  // Media Events
  Play = "play",
  Pause = "pause",
  Ended = "ended",
  VolumeChange = "volumechange",

  // Miscellaneous
  Load = "load",
  Error = "error",
  Abort = "abort",
}

export enum ProjectTypes {
  Development = "Development",
  Design = "Design",
}

export enum HeadingTagTypes {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export const enum CallToActionVariant {
  Primary = "primary",
  None = "none",
}

export interface MetaData {
  title?: string;
  description?: string;
}

export interface Link {
  name: string;
  url: string;
  target?: string;
}

export interface CallToAction {
  link?: Link;
  variant?: CallToActionVariant;
  type?: string;
  small?: boolean;
  disabled?: boolean;
  waiting?: boolean;
  external?: boolean;
  loading?: boolean;
}

export interface Projects {
  items: Project[];
}

export interface Project {
  id: number;
  metaData?: MetaData;
  slug: string;
  title: string;
  type: ProjectTypes;
  summary?: string;
  tileImage?: Image;
  image?: Image;
  tags?: string[];
  components?: ContentBlock[];
}

export interface BaseCard {
  type?: ProjectTypes;
  image?: Image;
  title: string;
  summary?: string;
  tags?: string[];
  url?: string;
}

export interface Image {
  src: string;
  altText: string;
  width?: number;
  height?: number;
  size?: number;
  type?: string;
  caption?: string;
}

export interface HeadingBlock {
  tag?: HeadingTagTypes | `${HeadingTagTypes}`;
  tagline?: string;
  title?: string;
  description?: string;
  alignment?: "center" | "left";
  containerSize?: "sm" | "md" | "lg";
  titleSize?: "sm" | "md" | "lg" | "xl";
}

export interface ProjectCardCollection {
  items?: BaseCard[];
}

export interface ContentBlock {
  content?: string | string[];
  images?: Image[];
  link?: Link;
}
