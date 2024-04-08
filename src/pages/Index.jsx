import React, { useState } from "react";
import { Box, VStack, HStack, Avatar, Text, Heading, Textarea, Button, Divider, IconButton, Input } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      setTweets([...tweets, { id: Date.now(), content: newTweet }]);
      setNewTweet("");
    }
  };

  return (
    <Box maxW="1200px" mx="auto" py={8}>
      <HStack spacing={8}>
        <Box w="25%">
          <VStack align="stretch" spacing={6}>
            <IconButton icon={<FaTwitter />} variant="ghost" size="lg" aria-label="Twitter" />
            <IconButton icon={<FaHome />} variant="ghost" size="lg" aria-label="Home" />
            <IconButton icon={<FaBell />} variant="ghost" size="lg" aria-label="Notifications" />
            <IconButton icon={<FaEnvelope />} variant="ghost" size="lg" aria-label="Messages" />
            <IconButton icon={<FaUser />} variant="ghost" size="lg" aria-label="Profile" />
          </VStack>
        </Box>
        <Box w="50%">
          <VStack align="stretch" spacing={6}>
            <Box>
              <Heading size="lg">Home</Heading>
            </Box>
            <Box>
              <Textarea value={newTweet} onChange={(e) => setNewTweet(e.target.value)} placeholder="What's happening?" resize="none" rows={3} />
              <Button onClick={handleTweetSubmit} colorScheme="twitter" mt={2} ml="auto" display="block">
                Tweet
              </Button>
            </Box>
            <Divider />
            {tweets.map((tweet) => (
              <Box key={tweet.id} borderWidth={1} borderRadius="md" p={4}>
                <HStack spacing={4}>
                  <Avatar name="User Avatar" src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMjUzOTc0N3ww&ixlib=rb-4.0.3&q=80&w=1080`} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">User Name</Text>
                    <Text fontSize="sm" color="gray.500">
                      @username
                    </Text>
                  </VStack>
                </HStack>
                <Text mt={4}>{tweet.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box w="25%">
          <Input placeholder="Search Twitter" mb={4} />
          {/* Add trending topics, who to follow, etc. */}
        </Box>
      </HStack>
    </Box>
  );
};

export default Index;
