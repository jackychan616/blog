import Link from 'next/link';
import Image from 'next/image';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
const useStyles = createStyles((theme) => ({
    root: {
      paddingTop: 80,
      paddingBottom: 120,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    },
  
    label: {
      textAlign: 'center',
      fontWeight: 900,
      fontSize: 220,
      lineHeight: 1,
      marginBottom: theme.spacing.xl * 1.5,
      color: theme.colors[theme.primaryColor][3],
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 120,
      },
    },
}));
function Notfound(){
    const { classes } = useStyles();
    return(
        <>
        <div className={classes.label}>404</div>
        <div className="container" style = {{zIndex :-1 ,position : "fixed", width : "100vw" ,height : "100vh"}}></div>
        <h2 style = {{textAlign: 'center'}}>不好意思!這裡沒有任何東西</h2>
        <div>
        <Group position = "center">
            <Link href = "/">
            <Button variant="subtle" size="md">
                Back to the home page
            </Button>
            </Link>
        </Group>
        </div>
        </>
    );
}

export default Notfound; 