import { useState } from "react";
import { Box, Container, Text, VStack, Grid, GridItem, IconButton, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);

  const handleAddNote = () => {
    if (title && content) {
      setNotes([...notes, { id: Date.now(), title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const handleEditNote = (id) => {
    const note = notes.find((note) => note.id === id);
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(true);
    setCurrentNoteId(id);
  };

  const handleUpdateNote = () => {
    setNotes(
      notes.map((note) =>
        note.id === currentNoteId ? { ...note, title, content } : note
      )
    );
    setTitle("");
    setContent("");
    setIsEditing(false);
    setCurrentNoteId(null);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">Note Taking App</Text>
          <IconButton
            aria-label="Add Note"
            icon={<FaPlus />}
            onClick={handleAddNote}
            colorScheme="teal"
          />
        </Flex>
        <Box>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={2}
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            mb={2}
          />
          {isEditing ? (
            <Button onClick={handleUpdateNote} colorScheme="teal">
              Update Note
            </Button>
          ) : (
            <Button onClick={handleAddNote} colorScheme="teal">
              Add Note
            </Button>
          )}
        </Box>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
          {notes.map((note) => (
            <GridItem key={note.id} p={4} borderWidth="1px" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {note.title}
              </Text>
              <Text mb={2}>{note.content}</Text>
              <Flex justify="space-between">
                <IconButton
                  aria-label="Edit Note"
                  icon={<FaEdit />}
                  onClick={() => handleEditNote(note.id)}
                  colorScheme="blue"
                />
                <IconButton
                  aria-label="Delete Note"
                  icon={<FaTrash />}
                  onClick={() => handleDeleteNote(note.id)}
                  colorScheme="red"
                />
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;