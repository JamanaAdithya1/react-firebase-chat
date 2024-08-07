import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { create } from "zustand";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: null,
  isReceiverBlocked: null,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // check if the current user is blocked

    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    //check if the receiver is blocked
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      // If neither of them are blocked
      set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },

  changeBlock: () => {
    // change the state of the receiver from block to unblock or vice-versa when the block button is clicked
    set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
}));
