export const fadeInLeftVariant = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInRightVariant = {
    hidden: {
        opacity: 0,
        x: 50   
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInTopVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInBottomVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: '-100vh',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0,
        x: '-100vh',
        transition: {
            type: 'tween',
            duration: 0.5,

        }}   
}

