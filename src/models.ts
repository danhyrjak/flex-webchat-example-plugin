export type ActionItem = OptionsActionItem; // TODO: add more here as a union
export const isActionItem = (item: unknown): item is ActionItem =>
    isOptionsActionItem(item)

interface Dictionary<T> {
    [Key: string]: T;
}

export type OptionsActionItem = {
    action: 'CHOICE';
    options: Dictionary<string>;
}

export const isOptionsActionItem = (item: unknown): item is OptionsActionItem =>
    typeof (item) === "object" && (item as any).action === "CHOICE" && typeof ((item as any).options) === "object";
