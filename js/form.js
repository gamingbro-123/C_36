class Form
{
    constructor()
    {
        
    }

    display()
    {
       var title = createElement('h2');
       title.html("car Racing Game");
       title.position(130,0);

       var input = createInput("NAME");
       input.position(130,160);
           
       var button = createButton("CLICK ME")
       button.position(250,200);
       button.mousePressed(function()
       {
           input.hide();
           button.hide();

          var myname = input.value();

           var greeting = createElement('h3');
           greeting.html("Hello " + myname);
           greeting.position(130,160);
           playerCount = playerCount+1;

           player.updateCount(playerCount)
           player.updateName(myname);
           



       })

    }
}