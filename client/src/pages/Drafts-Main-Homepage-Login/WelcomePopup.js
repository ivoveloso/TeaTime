import React from 'react';

function InternalStateEx() {
    const initRef = React.useRef()
    return (
        <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button>Click to {isOpen ? 'close' : 'open'}</Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverHeader>TeaTime</PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Box>/Hi! Welcome to TeaTime! \^w^/</Box>
                                <Button
                                    mt={4}
                                    colorScheme='blue'
                                    onClick={onClose}
                                    ref={initRef}
                                >
                                    Close! I'm Ready to View!
                                </Button>
                            </PopoverBody>
                            <PopoverFooter>Enjoy your Day!</PopoverFooter>
                        </PopoverContent>
                    </Portal>
                </>
            )}
        </Popover>
    )
}

  //Reference - https://chakra-ui.com/docs/components/popover/usage