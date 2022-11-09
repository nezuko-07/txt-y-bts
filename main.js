song1 = "txtbh.mp3";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
function preload()
{
	song1 = loadSound("txtbh.mp3");
    song2 = loadSound("");
    song3 = loadSound("");
    song4 = loadSound("");
    song5 = loadSound("");
}
function play1()
{
	song1.play();
	song1.setVolume(0.5);
	song1.rate(1);
}
function play2()
{
	song2.play();
	song2.setVolume(0.5);
	song2.rate(1);
}
function play3()
{
	song3.play();
	song3.setVolume(0.5);
	song3.rate(1);
}
function play4()
{
	song4.play();
	song4.setVolume(0.5);
	song4.rate(1);
}
function play5()
{
	song5.play();
	song5.setVolume(0.5);
	song5.rate(1);
}