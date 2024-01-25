import React from "react";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import CustomButton from "./CustomButton";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const MyModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContent}
        >
          <TouchableWithoutFeedback onPress={hideModal}>
            <View style={styles.container}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEwQk_y0R7bw2AmnKsJBGdsPf5Ezc-1UfEw&usqp=CAU",
                }}
                style={styles.image}
              ></Image>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Portal>

      <CustomButton
        style={{ paddingHorizontal: 30 }}
        label="Show Modal"
        onPress={showModal}
      />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    flex: 1,
    margin: 20,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
});

export default MyModal;
