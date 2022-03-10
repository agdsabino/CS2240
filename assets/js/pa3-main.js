$(document).ready(function (){ 
    // modal
    showLogin();

    function showLogin(){
        $('#mainModal').modal('show');
        $("#mainModal").draggable();
    }

    // navigation
    $("#nav-login").click(function() {
        showLogin();
    });
    
    // timeline section
    $('section span[id]').map(function() {
        return this.id;
    });

    document.querySelectorAll('.timeline-dot').forEach(dot => {
        dot.addEventListener('click', function() {
            let year = parseInt($(this).parent().find('span').text());
            let content = []
            
            // change dot color
            $('.selected').attr('class','timeline-dot');
            $(this).attr('class','timeline-dot selected');
            
            // change carousel content
            switch(year){
                case 1914:
                    content = [ ["July 28, 1914","Archduke Francis Ferdinand of Austria is assassinated by Gavrilo Princip, a Bosnian Serb student. Later on, Austria-Hungary would declare war on Serbia, sparking World War I."],
                                ["August 2-7, 1914","Luxembourg and Belgium is invaded by Germany. France invades Lasace. British forces arrive in France. Soon, Italy, Australia, New Zealand, South Africa, Rhodesia, Romania, Greece, France, Belgium, United States, Canada, Russia, Great Britain, Serbia, India, Portugal, Poland and Motenegro would ally against Germany."],
                                ["August 10, 1914","Russia is invaded by Austria-Hungary."],
                                ["September 9, 1914","German advance into France is halted by allied forces during First Battle of the Marne."]];
                    break;
                case 1915:
                    content = [ ["February 18, 1915","Germany begins naval blockade of Great Britain."],
                                ["April 25, 1915","German advance into France is halted by allied forces during First Battle of the Marne."],
                                ["May 7, 1915","German submarine sinks the passenger liner Lusitania during crossing from New York to Liverpool, England, killing 128 Americans."],
                                ["May 23, 1915","Italy declares war on Austria-Hungary."]];
                    break;
                case 1916:        
                    content = [ ["February 21, 1916","Germany begins the attack on Verdun."],
                                ["May 31, 1916","Naval Battle of Jutland takes place between British and German fleets."],
                                ["July 1, 1916","Allied offensive begins the Battle of the Somme."],
                                ["December 18, 1916","Battle of Verdun ends with 550,000 French and 450,000 German casualties."]];
                    break;
                case 1917:
                    content = [ ["February 1, 1917","Germany returns to unrestricted submarine warfare halted after the sinking of the Lusitania."],
                                ["February 3, 1917","United States severs diplomatic relations with Germany."],
                                ["April 6, 1917","The United States declares war on Germany."],
                                ["June 7, 1917","General John J. Pershing, newly selected commander of the American Expeditionary Forces, arrives in England with his staff."],
                                ["June 24, 1917","American combat forces arrive in France."],
                                ["December 15, 1917","Russia signs armistice with Germany."]];
                    break;
                case 1918:
                    content = [ ["January 8, 1918","President Woodrow Wilson presents to Congress his outline of Fourteen Points required for peace."],
                                ["February 8, 1918","The Stars and Stripes begins publication with a first issue of one thousand copies. Second Lieutenant Guy T. Viskniskki is the first managing editor of the newspaper."],
                                ["March 3, 1918","Russia signs the Treaty of Brest-Litovsk with Germany."],
                                ["March 21, 1918","Germany begins its final offensive of the war."],
                                ["March 1918","American women recruited to serve as bilingual telephone operators for the AEF arrive in Europe."],
                                ["May 28, 1918","United States forces are victorious in the Battle of Cantigny, the first independent American operation."],
                                ["June 2, 1918","American forces stop German attempt to cross the Marne River at Chateau-Thierry."],
                                ["July 26, 1918","The Stars and Stripes suspends the Sporting Page."],
                                ["September 12, 1918","American First Army attacks St. Mihiel salient."],
                                ["September 26, 1918","Allied forces begin the attack at Meusse-Argonne, the final offensive of the war."],
                                ["November 11, 1918","Germany signs the Armistice at Compiègne, ending World War I."],
                                ["December 1918","Harold Ross assumes editorship of The Stars and Stripes."],
                                ["December 1, 1918","British and American forces enter Germany."],
                                ["December 16, 1918","The Stars and Stripes War Orphans Adoption Campaign ends after raising 123,047 francs and placing 3,444 orphans for adoption."],
                                ["December 27, 1918","Sporting Page returns to The Stars and Stripes."]]
                    break;
                case 1919:
                    content = [ ["January 18, 1919","Peace conference begins at Paris."],
                                ["February 8, 1919","First anniversary of The Stars and Stripes. Circulation surpasses 500,000."],
                                ["February 14, 1919","Draft of the covenant of the League of Nations is completed."],
                                ["June 13, 1919","Last issue of The Stars and Stripes is published."],
                                ["June 28, 1919","Allied and German representatives sign treaty of Versailles. The United States signs treaty of guaranty, pledging to defend France in case of an unprovoked attack by Germany."],
                                ["November 19, 1919","United States Senate fails to ratify Treaty of Versailles."]]

                    break;
                case 1920:
                    content = [ ["January 10, 1920","Treaty of Versailles takes effect."],
                                ["March 19, 1920","United States Senate fails to ratify Treaty of Versailles for the second time."]]
                    break;
                case 1921:
                    content = [["August 24-29, 1921","United States signs separate peace treaties with Germany, Austria, and Hungary."]];
                    break;
            }
           
            // remove carousel items
            $('.carousel-item').fadeOut('slow', 'linear', function(){
                this.remove();
            });

            // populate carousel 
            let activeItem =    '<div class = "carousel-item active" style="display: none">' +
                                '<h4>'+content[0][0]+'</h4>'+
                                '<p>'+content[0][1]+'</p>'+
                                '</div>';
            $('#carouselContainer').append(activeItem).find('.active').fadeIn('slow');

            if(content.length > 1){
                for(let x = 1; x < content.length; x++){
                    let item =  '<div class = "carousel-item">' +
                                '<h4>'+content[x][0]+'</h4>'+
                                '<p>'+content[x][1]+'</p>'+
                            '</div>';
                    $('#carouselContainer').append(item);
                }
            }
        });
    });
});