import React from "react";
import { View } from "react-native";
import ComingSoon from "./ComingSoon"
import HeaderText from "./HeaderText";

const ContentHeader = (props) => {
    return (
        <View style={{
            alignItems: "center"
        }}>
            <ComingSoon />

            <HeaderText text={props.text} />
        </View>
    );
}

export default ContentHeader;