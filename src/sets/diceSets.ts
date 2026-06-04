import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";
import { DiceType } from "../types/DiceType";

import * as dsd6Previews from "../previews/dsd6";

const standardPreviews: Record<"DSD6" | "DSD6_RED", string> = {
  DSD6: dsd6Previews.D6,
  DSD6_RED: dsd6Previews.D6,
};

function createStandardSet(style: "DSD6"): DiceSet {
  return {
    id: "DSD6_STANDARD",
    name: "D6 dice",
    dice: [
      { id: "DSD6_STANDARD_D6", type: "D6", style },
      { id: "DSD6_STANDARD_D6_RED", type: "D6", style: "DSD6_RED" },
    ],
    previewImage: standardPreviews[style],
  };
}

const standardSets: DiceSet[] = [createStandardSet("DSD6")];

export const diceSets: DiceSet[] = [...standardSets];
