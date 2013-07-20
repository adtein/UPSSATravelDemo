/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'UPSSATravelDemo',

    requires: [
        'Ext.MessageBox',
        'Ext.carousel.Carousel',
        'Ext.Img'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,

    glossOnIcon: false,
    phoneStartupScreen: 'resources/startup/adteinStartUp.jpg',
    tabletStartupScreen: 'resources/startup/adteinStartUp.jpg',
    /**
     * The launch method is called when the browser is ready and the application is ready to
     * launch.
     */
    launch: function() {
        //first we define each of the categories we have for each one of the horixontal carousels
        //these images can be found inside resources/photos/{category_name}/*
        var categories = ['Food', 'Animals', 'Cars', 'Architecture'],
            itemsCountPerCategory = 10,
            horizontalCarousels = [],
            items, i, j, ln, category;

        //now we loop through each of the categories
        for (i = 0,ln = categories.length; i < ln; i++) {
            items = [];
            category = categories[i];

            for (j = 1; j <= itemsCountPerCategory; j++) {
                //and push each of the image as an item into the items array
                //you can see we are using the img xtype which is an image component,
                //and we just give is a custom cls to style it, and the src
                //of the image
                items.push({
                    xtype: 'image',
                    cls: 'my-carousel-item-img',
                    src: 'resources/photos/' + category + '/' + j + '.jpg'
                });
            }

            //now we add the new horizontal carousel for this category
            horizontalCarousels.push({
                xtype: 'carousel',

                //the direction is horizontal
                direction: 'horizontal',

                //we turn on direction lock so you cannot scroll diagonally
                directionLock: true,

                //and give it the items array
                items: items
            });
        }

        //and finally we create the vertical carousel which contains each of the horizontal
        //category carousels above
        Ext.Viewport.add({
            xtype: 'carousel',

            bufferSize: 2,

            //this time direction vertical
            direction: 'vertical',

            //and the horizontalCarousels array
            items: horizontalCarousels
        });
    }
});
