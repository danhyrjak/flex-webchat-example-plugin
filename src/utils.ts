import { MessageInputChildrenProps } from "@twilio/flex-ui-core/src/components/channel/MessageInput/MessageInputImpl"
import { ActionItem, isActionItem } from "./models";

export const getActionItemFromComponentProps = (props: MessageInputChildrenProps): ActionItem | undefined => {
    if (props.channel) {
        const lastItem = props.channel.messages.filter(e => e.source.sid && !e.isFromMe).sort((a, b) => a.index - b.index)?.pop();
        if (lastItem?.source.sid) {
            if (isActionItem(lastItem.source.attributes)) {
                return lastItem.source.attributes;
            }
        }
    }
    return undefined;
};