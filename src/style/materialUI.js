
const style = (theme) => ({
    switchToTrelloIcon: {
        color: "#d8e5f7",
        background: "#0254cc",
        width: 40,
        height: 30,
        borderRadius: 10
    },
    HeaderIcons: {
        color: "white",
        fontSize: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 6,
        marginLeft: 5,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
    },
    HeaderIcons_logoIcon: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 40,
        marginLeft: 5,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        "&:hover": {
           color: "#efefef"
        }

    },
    SearchIcon: {
        color: "black",
        fontSize: 25,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
        borderRadius: 2,
        marginTop: 3
    },
})
export default style;



