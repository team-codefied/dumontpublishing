/**
 * A single promise shared by the preloader and the page motion system:
 * scroll and entrance animations wait until the opening curtain has lifted.
 */
let resolveReady: () => void = () => {};
let resolved = false;

const ready = new Promise<void>((resolve) => {
  resolveReady = resolve;
});

export function markReady() {
  resolved = true;
  resolveReady();
}

export const whenReady = () => ready;

export const isReady = () => resolved;
