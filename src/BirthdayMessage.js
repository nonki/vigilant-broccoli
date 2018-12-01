import React from 'react';
import YoutubeList from './YoutubeList.js';
import { withStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    width: '100%',
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 10,
  },
  blurb: {
    padding: theme.spacing.unit * 5,
    backgroundColor: theme.palette.primary.main,
  },
  blurbSection: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  blurbSong: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
  },
  blurbSongSub: {
    paddingTop: theme.spacing.unit * 2,
  },
});

const blurbVariant = 'body1';

const BirthdayMessage = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Happy Birthday, Milica!
      </Typography>
      <div className={classes.blurb}>
        <Typography variant={blurbVariant}>
          <div className={classes.blurbSong}>
            <i>
              Happy Birthday to You,
              <br />
              Happy Birthday to You,
              <br />
              Happy Birthday Dear Milica,
              <br />
              Happy Birthday to You!
            </i>
            <div className={classes.blurbSongSub}>
              <Typography variant="caption">
                You're lucky I didn't record myself singing this, you might not be so lucky next year
                <br />
                Consider yourself <u>warned</u>
              </Typography>
            </div>
          </div>
          <div className={classes.blurbSection}>
            I know you don't really care about birthdays and all that, but I wanted to wish you a happy, happy birthday all the way from the dark and rainy UK anyway!
            Unfortunately, though I guess luckily for you, I can't wish you a happy birthday in person, though you know I 100% would if I could, so I figured I'd make this thing, as I felt I had to do at least <i>something</i> more than just a regular message, even if this barely meets that criteria.
            Anyways, I do truly hope that you can have an <b>amazing</b> birthday.
            I hope you have someone there who you can spend time with, and just enjoy the day with, because you really do deserve - at the <i>very least</i> - a day where you can just relax and not worry about things.
          </div>
          <div className={classes.blurbSection}>
            Who would have thought that a simple question of <i>"What Kpop bands do you like?"</i> could lead to a friendship that I truly am so <b>so</b> grateful for every single day.
            I'll never understand how I could be so lucky to have someone like <i>you</i> just appear out of nowhere, and how suddenly there is someone that exists that I genuinely care for, more than you could ever know.
            You brighten up my life sooo much, all the time, and I will never be able to express how thankful I am to have met you.
            No matter what I do to try express it, it's never enough.
            I wish, so much, that I could explain or show you how amazing you are, and how special you are to me.
          </div>
          <div className={classes.blurbSection}>
            On the topic of music, I thought I'd add a little section for songs that always make me think of you in that special way - though, let's be honest, I don't need songs to be thinking you allll the time in that special way anyway.
          </div>
          <div className={classes.blurbSection}>
            <Typography variant="caption">
              <i>the video list should be scrollable left and right by the way, not sure if that's obvious, though I'm not sure if it will work in your browser because I'm a terrible developer and don't know what I'm doing</i>
            </Typography>
          </div>
        </Typography>
        <YoutubeList />
        <Typography variant={blurbVariant}>
          <div className={classes.blurbSection}>
            I must admit, I was pretty nervous when we first started spending time together in Overwatch and, of course, Stardew Valley.
            I remember you asking me to play Overwatch for the first time and just thinking <i>"Fuck. I'm terrible at talking to people, why the fuck would she want to spend time with me, what on earth am I supposed to say, she'll just think I'm lame af."</i> But somehow, that didn't happen and you actually still wanted to spend time together after that, though I noticed we haven't played much Overwatch since that first time so I'm <i>pretty sure</i> it's because of how shit I am at that game... I joke, I joke.
            Then we started playing some Stardew Valley together and it was just so nice to just be able to chill late into the night with you, and talk, and get to know each other a bit better and, at least for me, get over those inital nerves and shit of talking to someone new - even though we'd talked over text a fucking shit ton, even by this point.
            Though I gotta say, it was reallllly fucking easy to get over that nervous feeling with you, everything always feels so easy when I'm talking to you, it feels like I've known you my entire life.
            I still laugh everytime I remember you saying <i>"I'll die"</i> in those mines in Stardew, you sounded so adorable every time, and I always hear it in your voice, so you really can't blame me for abandoning you some times to hear it again.
          </div>
          <div className={classes.blurbSection}>
            Damn, and then not long after Stardew Valley, we started playing Divinity 2.
            It hardly needs to be said, how much I fucking <b><i>loved</i></b> every single second of playing Divinity 2 with you.
            That period of time will <b>always</b> be so incredibly special to me, believe me.
            I'm sure it could have been any other game, but it was the fact that I got to spend so much time with you (90+ hours!), so often, and I felt we got even closer and more comfortable with each other and got to know each other even better over those nights.
            Just being able to come home from work and think <i>"Now I get to spend all night talking to Milica"</i> really did make me happier than you realise and I wish that was the case every single day.
            We definitely pushed it a bit with the staying up late, getting only two hours sleep or even less certainly made it harder to get out of bed in the morning, and I can only hope that it didn't affect your University lessons etc but I wouldn't trade that time we spent together for anything else in the world.
            Anyone else could have probably beaten the game in a quarter of the time, because I'm pretty sure we spent more time stood still just talking instead of actually playing the game in the second half - but honestly, those are the times I enjoyed the most of all.
            I could listen to you talk all night, and I feel like I want to talk to you about everything and anything because, whenever we're talking it feels like nothing else really matters and I feel so calm and so happy and so warm.
          </div>
          <div className={classes.blurbSection}>
            Of course, when it comes to talking instead of actually playing the game, it seems we're only getting worse and worse.
            The fact that, for like three days straight, we called each other to play some Human Fall Flat only to then spend <b>6+ hours</b> doing nothing but talking to each other is crazy to me.
            Time is so fucky whenever I'm spending it with you.
            Honestly, every hour feels like five minutes and I end up just sat there at 3am thinking, what the actual fuck because it feels we were only actually talking for like half an hour not 6 hours.
            I genuinely wish I could rewind time or slow it down so I could talk with you foreverrrr.
          </div>
          <div className={classes.blurbSection}>
            You really are such an incredible, kind, caring, warm, smart, beautiful human being and you really should be so so proud of who you are as a person and what you've achieved.
            I know you're going through tough times right now, but just remember that it won't last forever and you're not alone!
            It might feel like it sometimes, when you're living alone and you don't have time to think, but you still feel like nothing is even getting done and everything feels kinda hopeless and dark... but you will <b>always</b> have so many people who care for you and genuinely <i>want</i> to help you and make you happy.
            You already mean so much to me, so I can only imagine how much other people care for you and I'm sure they all want to make sure you're living a happy life.
          </div>
          <div className={classes.blurbSection}>
            I do <i>really</i> mean it when I say you mean so much to me too.
            It might seem insincere or unbelievable, it's something that can be hard to express, even moreso when I can't show you in person.
            But trust me, I care about you a hell of a lot.
            You already know that I have feelings for you, and they certainly haven't gotten any less strong even after not being able to spend time with you for so long, I can't stress that enough.
            If anything, not talking as much has just made me realise like, damn, how much I genuinely loved and miss spending time with you - and I already fucking knew without a shadow of a doubt that I loved spending time with you.
            Not being able to talk to you, after talking to you so much every day, makes these days just feel like they're missing something.
            I don't know if that makes sense, but I hope it does, and isn't too weird.
            Meeting you somehow made me become so much more comfortable just being... me, y'know?
            I don't know how to explain it really, I guess because I always think of us as really quite similar in a lot of ways and the fact that I <i>love</i> everything about you just makes me happier being me.
            The fact that you can make me feel that way at all is honestly something else, I don't know how you manage it but I'm grateful for you every waking hour.
            You really, really, do make me a happier person every single day.
            Even if it's a day where I can't talk to you, even over text, just the thought of you manages to bring me so much happiness.
            I want to bring you that same happiness every day, and I'll try my very fucking best.
          </div>
          <div className={classes.blurbSection}>
            I am missing you so, so, so, so much.
            I actually can't express how much I'm missing you and how much I wish we could spend time together.
            Not talking to you, or hearing your voice, for so long has genuinely been tough at times - sorry to be a creep, but it's true.
            But, I know that we genuinely <i>can't</i> spend time together because you're incredibly busy, and tired, and have important things going on in your life, so I'm perfectly fine waiting until next year when you might have some more time, and I honestly cannot wait.
            I'll be looking forward to it and thinking about you until then!
          </div>
          <div className={classes.blurbSection}>
            Anyways, I hope you managed to stay awake reading all that because now it's time for the actual good stuff.
            Go ahead and click the button below to get some goodies!
            I hid each one behind a reveal thing because I know you've said before that not knowing what they are made you feel like a little kid opening presents and shit so hopefully you get at least a bit of that same excitement!
            Though I wish I knew how to code so I could make it some cool fucking gift opening animation or something (next year this will be a thing).
            Anyways, I hope you can get some enjoyment from them and, again, have an amazing day and I hope your next year is the best year yet!
          </div>
          <div className={classes.blurbSection}>
            Happy birthday
            <br />
            I'll be thinking of you all day, just like every single day.
            <br />
            Good luck with everything!
            <br />
            Thomas &lt;3
          </div>
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(BirthdayMessage);
