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

export interface Projects {
  items: Project[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: ProjectTypes;
  summary?: string;
  tileImage?: Image;
  image?: Image;
  tags?: string[];
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
