import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <div>
      <VStack borderRadius={20} backgroundColor="#f5f2f2">
        <Image src={imageSrc} borderRadius={20} />
        <div>

          <Heading m={3} textColor="#000000">{title}</Heading>
          <Text m={3} textColor="#3b3a3a">{description}</Text>
          <Text m={3}   textColor="#000000">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
          
        </div>
      </VStack>
    </div>
  );
};

export default Card;
