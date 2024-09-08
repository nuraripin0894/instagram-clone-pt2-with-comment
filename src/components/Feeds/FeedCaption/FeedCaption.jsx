import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const FeedCaption = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(true);
  };

  return (
    <View>
      <Text
        style={{ fontWeight: "bold" }}
        numberOfLines={isExpanded ? undefined : 2}
      >
        {props.item.username}{" "}
        <Text style={{ fontWeight: "300" }}>{props.item.feed.caption}</Text>
      </Text>
      {!isExpanded && (
        <Text onPress={handleToggle} style={{ color: "black" }}>
          {isExpanded ? undefined : "more"}
        </Text>
      )}
    </View>
  );
};

export default FeedCaption;
