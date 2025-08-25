import { BGColorsBrighter, type IBGColors } from '../types/IBGColors';

export function getBrighterColor(color: IBGColors): string {
  return BGColorsBrighter[color];
}
