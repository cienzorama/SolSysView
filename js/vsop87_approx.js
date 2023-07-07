function vsop87_planet_pos(jd00,id00) {

    var t,t0,t1,t2,t3,t4,t5;
    var longecl2,latecl2,r2;
    var xeclip2,yeclip2,zeclip2;
    var Lon_T,Lat_T,Rad_T;

    var MercuryLon,MercuryLon0,MercuryLon1,MercuryLon2,MercuryLon3,MercuryLon4,MercuryLon5;
    var MercuryLat,MercuryLat0,MercuryLat1,MercuryLat2,MercuryLat3,MercuryLat4,MercuryLat5;
    var MercuryRad,MercuryRad0,MercuryRad1,MercuryRad2,MercuryRad3,MercuryRad4,MercuryRad5;

    var VenusLon,VenusLon0,VenusLon1,VenusLon2,VenusLon3,VenusLon4,VenusLon5;
    var VenusLat,VenusLat0,VenusLat1,VenusLat2,VenusLat3,VenusLat4,VenusLat5;
    var VenusRad,VenusRad0,VenusRad1,VenusRad2,VenusRad3,VenusRad4,VenusRad5;

    var EarthLon,EarthLon0,EarthLon1,EarthLon2,EarthLon3,EarthLon4,EarthLon5;
    var EarthLat,EarthLat0,EarthLat1,EarthLat2,EarthLat3,EarthLat4,EarthLat5;
    var EarthRad,EarthRad0,EarthRad1,EarthRad2,EarthRad3,EarthRad4,EarthRad5;

    var MarsLon,MarsLon0,MarsLon1,MarsLon2,MarsLon3,MarsLon4,MarsLon5;
    var MarsLat,MarsLat0,MarsLat1,MarsLat2,MarsLat3,MarsLat4,MarsLat5;
    var MarsRad,MarsRad0,MarsRad1,MarsRad2,MarsRad3,MarsRad4,MarsRad5;

    var JupiterLon,JupiterLon0,JupiterLon1,JupiterLon2,JupiterLon3,JupiterLon4,JupiterLon5;
    var JupiterLat,JupiterLat0,JupiterLat1,JupiterLat2,JupiterLat3,JupiterLat4,JupiterLat5;
    var JupiterRad,JupiterRad0,JupiterRad1,JupiterRad2,JupiterRad3,JupiterRad4,JupiterRad5;

    var SaturnLon,SaturnLon0,SaturnLon1,SaturnLon2,SaturnLon3,SaturnLon4,SaturnLon5;
    var SaturnLat,SaturnLat0,SaturnLat1,SaturnLat2,SaturnLat3,SaturnLat4,SaturnLat5;
    var SaturnRad,SaturnRad0,SaturnRad1,SaturnRad2,SaturnRad3,SaturnRad4,SaturnRad5;

    var UranusLon,UranusLon0,UranusLon1,UranusLon2,UranusLon3,UranusLon4,UranusLon5;
    var UranusLat,UranusLat0,UranusLat1,UranusLat2,UranusLat3,UranusLat4,UranusLat5;
    var UranusRad,UranusRad0,UranusRad1,UranusRad2,UranusRad3,UranusRad4,UranusRad5;

    var NeptuneLon,NeptuneLon0,NeptuneLon1,NeptuneLon2,NeptuneLon3,NeptuneLon4,NeptuneLon5;
    var NeptuneLat,NeptuneLat0,NeptuneLat1,NeptuneLat2,NeptuneLat3,NeptuneLat4,NeptuneLat5;
    var NeptuneRad,NeptuneRad0,NeptuneRad1,NeptuneRad2,NeptuneRad3,NeptuneRad4,NeptuneRad5;

    t = (jd00 - 2451545.0)/365250.0;

    var dospi360=Math.PI/180.0;

    t0=1;
    t1=t;
    t2=t*t;
    t3=t2*t;
    t4=t3*t;
    t5=t4*t;

    Lon_T=0;Lat_T=0;Rad_T=0;

    //Mercury
    if (id00==1) {
        MercuryLon0 = 0;
        MercuryLon0+= 440250710.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryLon0+= 40989415.0 * Math.cos ( 1.483020 + 26087.903142 * t);
        MercuryLon0+= 5046294.0 * Math.cos ( 4.477855 + 52175.806283 * t);
        MercuryLon0+= 855347.0 * Math.cos ( 1.165203 + 78263.709425 * t);
        MercuryLon0+= 165590.0 * Math.cos ( 4.119692 + 104351.612566 * t);
        MercuryLon0+= 34562.0 * Math.cos ( 0.779308 + 130439.515708 * t);
        MercuryLon0+= 7583.0 * Math.cos ( 3.713484 + 156527.418849 * t);
        MercuryLon0+= 3560.0 * Math.cos ( 1.512027 + 1109.378552 * t);
        MercuryLon0+= 1803.0 * Math.cos ( 4.103332 + 5661.332049 * t);
        MercuryLon0+= 1726.0 * Math.cos ( 0.358322 + 182615.321991 * t);
        MercuryLon0+= 1590.0 * Math.cos ( 2.995104 + 25028.521211 * t);
        MercuryLon0+= 1365.0 * Math.cos ( 4.599183 + 27197.281694 * t);
        MercuryLon0+= 1017.0 * Math.cos ( 0.880314 + 31749.235191 * t);
        MercuryLon0+= 714.0 * Math.cos ( 1.541449 + 24978.524589 * t);
        MercuryLon0+= 644.0 * Math.cos ( 5.302661 + 21535.949645 * t);
        MercuryLon0+= 451.0 * Math.cos ( 6.049893 + 51116.424353 * t);
        MercuryLon0+= 404.0 * Math.cos ( 3.282288 + 208703.225133 * t);
        MercuryLon0+= 352.0 * Math.cos ( 5.241563 + 20426.571092 * t);
        MercuryLon0+= 345.0 * Math.cos ( 2.792119 + 15874.617595 * t);
        MercuryLon0+= 343.0 * Math.cos ( 5.765319 + 955.599742 * t);
        MercuryLon0+= 339.0 * Math.cos ( 5.863278 + 25558.212176 * t);
        MercuryLon0+= 325.0 * Math.cos ( 1.336743 + 53285.184835 * t);
        MercuryLon0+= 273.0 * Math.cos ( 2.494512 + 529.690965 * t);
        MercuryLon0+= 264.0 * Math.cos ( 3.917051 + 57837.138332 * t);
        MercuryLon0+= 260.0 * Math.cos ( 0.987324 + 4551.953497 * t);
        MercuryLon0+= 239.0 * Math.cos ( 0.113440 + 1059.381930 * t);
        MercuryLon0+= 235.0 * Math.cos ( 0.266721 + 11322.664098 * t);
        MercuryLon0+= 217.0 * Math.cos ( 0.659872 + 13521.751442 * t);
        MercuryLon0+= 209.0 * Math.cos ( 2.091782 + 47623.852786 * t);
        MercuryLon0+= 183.0 * Math.cos ( 2.628787 + 27043.502883 * t);
        MercuryLon0+= 182.0 * Math.cos ( 2.434135 + 25661.304951 * t);
        MercuryLon0+= 176.0 * Math.cos ( 4.536368 + 51066.427731 * t);
        MercuryLon0+= 173.0 * Math.cos ( 2.452002 + 24498.830246 * t);
        MercuryLon0+= 142.0 * Math.cos ( 3.360039 + 37410.567240 * t);
        MercuryLon0+= 138.0 * Math.cos ( 0.290984 + 10213.285546 * t);
        MercuryLon0+= 125.0 * Math.cos ( 3.720798 + 39609.654583 * t);
        MercuryLon0+= 118.0 * Math.cos ( 2.781498 + 77204.327495 * t);
        MercuryLon0+= 106.0 * Math.cos ( 4.205721 + 19804.827292 * t);

        MercuryLon1 = 0;
        MercuryLon1+= 2608814706223.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryLon1+= 1126008.0 * Math.cos ( 6.217040 + 26087.903142 * t);
        MercuryLon1+= 303471.0 * Math.cos ( 3.055655 + 52175.806283 * t);
        MercuryLon1+= 80538.0 * Math.cos ( 6.104547 + 78263.709425 * t);
        MercuryLon1+= 21245.0 * Math.cos ( 2.835319 + 104351.612566 * t);
        MercuryLon1+= 5592.0 * Math.cos ( 5.826757 + 130439.515708 * t);
        MercuryLon1+= 1472.0 * Math.cos ( 2.518455 + 156527.418849 * t);
        MercuryLon1+= 388.0 * Math.cos ( 5.480392 + 182615.321991 * t);
        MercuryLon1+= 352.0 * Math.cos ( 3.052381 + 1109.378552 * t);
        MercuryLon1+= 103.0 * Math.cos ( 2.148792 + 208703.225133 * t);
        MercuryLon1+= 94.0 * Math.cos ( 6.117912 + 27197.281694 * t);
        MercuryLon1+= 91.0 * Math.cos ( 0.000455 + 24978.524589 * t);
        MercuryLon1+= 52.0 * Math.cos ( 5.621076 + 5661.332049 * t);
        MercuryLon1+= 44.0 * Math.cos ( 4.573485 + 25028.521211 * t);
        MercuryLon1+= 28.0 * Math.cos ( 3.041954 + 51066.427731 * t);
        MercuryLon1+= 27.0 * Math.cos ( 5.092101 + 234791.128274 * t);

        MercuryLon2 = 0;
        MercuryLon2+= 53050.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryLon2+= 16904.0 * Math.cos ( 4.690723 + 26087.903142 * t);
        MercuryLon2+= 7397.0 * Math.cos ( 1.347356 + 52175.806283 * t);
        MercuryLon2+= 3018.0 * Math.cos ( 4.456435 + 78263.709425 * t);
        MercuryLon2+= 1107.0 * Math.cos ( 1.262265 + 104351.612566 * t);
        MercuryLon2+= 378.0 * Math.cos ( 4.319981 + 130439.515708 * t);
        MercuryLon2+= 123.0 * Math.cos ( 1.068685 + 156527.418849 * t);
        MercuryLon2+= 39.0 * Math.cos ( 4.080116 + 182615.321991 * t);
        MercuryLon2+= 15.0 * Math.cos ( 4.633431 + 1109.378552 * t);
        MercuryLon2+= 12.0 * Math.cos ( 0.791876 + 208703.225133 * t);

        MercuryLon3 = 0;
        MercuryLon3+= 188.0 * Math.cos ( 0.034668 + 52175.806283 * t);
        MercuryLon3+= 142.0 * Math.cos ( 3.125055 + 26087.903142 * t);
        MercuryLon3+= 97.0 * Math.cos ( 3.003782 + 78263.709425 * t);
        MercuryLon3+= 44.0 * Math.cos ( 6.018680 + 104351.612566 * t);
        MercuryLon3+= 35.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryLon3+= 18.0 * Math.cos ( 2.775384 + 130439.515708 * t);
        MercuryLon3+= 7.0 * Math.cos ( 5.818087 + 156527.418849 * t);
        MercuryLon3+= 3.0 * Math.cos ( 2.570144 + 182615.321991 * t);

        MercuryLon4 = 0;
        MercuryLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MercuryLon4+= 3.0 * Math.cos ( 2.028480 + 26087.903142 * t);
        MercuryLon4+= 2.0 * Math.cos ( 1.417318 + 78263.709425 * t);
        MercuryLon4+= 2.0 * Math.cos ( 4.501376 + 52175.806283 * t);
        MercuryLon4+= 1.0 * Math.cos ( 4.499702 + 104351.612566 * t);
        MercuryLon4+= 1.0 * Math.cos ( 1.265918 + 130439.515708 * t);

        MercuryLon5 = 0;
        MercuryLon5+= 1.0 * Math.cos ( 3.141593 + 0.000000 * t);

        MercuryLon =
        + MercuryLon0 * t0
        + MercuryLon1 * t1
        + MercuryLon2 * t2
        + MercuryLon3 * t3
        + MercuryLon4 * t4
        + MercuryLon5 * t5;

        Lon_T = MercuryLon; 

        MercuryLat0 = 0;
        MercuryLat0+= 11737529.0 * Math.cos ( 1.983575 + 26087.903142 * t);
        MercuryLat0+= 2388077.0 * Math.cos ( 5.037390 + 52175.806283 * t);
        MercuryLat0+= 1222840.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MercuryLat0+= 543252.0 * Math.cos ( 1.796444 + 78263.709425 * t);
        MercuryLat0+= 129779.0 * Math.cos ( 4.832325 + 104351.612566 * t);
        MercuryLat0+= 31867.0 * Math.cos ( 1.580885 + 130439.515708 * t);
        MercuryLat0+= 7963.0 * Math.cos ( 4.609721 + 156527.418849 * t);
        MercuryLat0+= 2014.0 * Math.cos ( 1.353242 + 182615.321991 * t);
        MercuryLat0+= 514.0 * Math.cos ( 4.378354 + 208703.225133 * t);
        MercuryLat0+= 209.0 * Math.cos ( 2.020203 + 24978.524589 * t);
        MercuryLat0+= 208.0 * Math.cos ( 4.917726 + 27197.281694 * t);
        MercuryLat0+= 132.0 * Math.cos ( 1.119085 + 234791.128274 * t);
        MercuryLat0+= 121.0 * Math.cos ( 1.812718 + 53285.184835 * t);
        MercuryLat0+= 100.0 * Math.cos ( 5.656847 + 20426.571092 * t);

        MercuryLat1 = 0;
        MercuryLat1+= 429151.0 * Math.cos ( 3.501698 + 26087.903142 * t);
        MercuryLat1+= 146234.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MercuryLat1+= 22675.0 * Math.cos ( 0.015154 + 52175.806283 * t);
        MercuryLat1+= 10895.0 * Math.cos ( 0.485402 + 78263.709425 * t);
        MercuryLat1+= 6353.0 * Math.cos ( 3.429439 + 104351.612566 * t);
        MercuryLat1+= 2496.0 * Math.cos ( 0.160512 + 130439.515708 * t);
        MercuryLat1+= 860.0 * Math.cos ( 3.184524 + 156527.418849 * t);
        MercuryLat1+= 278.0 * Math.cos ( 6.210208 + 182615.321991 * t);
        MercuryLat1+= 86.0 * Math.cos ( 2.952444 + 208703.225133 * t);
        MercuryLat1+= 28.0 * Math.cos ( 0.290689 + 27197.281694 * t);
        MercuryLat1+= 26.0 * Math.cos ( 5.977090 + 234791.128274 * t);

        MercuryLat2 = 0;
        MercuryLat2+= 11831.0 * Math.cos ( 4.790656 + 26087.903142 * t);
        MercuryLat2+= 1914.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryLat2+= 1045.0 * Math.cos ( 1.212165 + 52175.806283 * t);
        MercuryLat2+= 266.0 * Math.cos ( 4.434183 + 78263.709425 * t);
        MercuryLat2+= 170.0 * Math.cos ( 1.622556 + 104351.612566 * t);
        MercuryLat2+= 96.0 * Math.cos ( 4.800237 + 130439.515708 * t);
        MercuryLat2+= 45.0 * Math.cos ( 1.607583 + 156527.418849 * t);
        MercuryLat2+= 18.0 * Math.cos ( 4.669047 + 182615.321991 * t);
        MercuryLat2+= 7.0 * Math.cos ( 1.434049 + 208703.225133 * t);

        MercuryLat3 = 0;
        MercuryLat3+= 235.0 * Math.cos ( 0.353875 + 26087.903142 * t);
        MercuryLat3+= 161.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryLat3+= 19.0 * Math.cos ( 4.362755 + 52175.806283 * t);
        MercuryLat3+= 6.0 * Math.cos ( 2.507154 + 78263.709425 * t);
        MercuryLat3+= 5.0 * Math.cos ( 6.142578 + 104351.612566 * t);
        MercuryLat3+= 3.0 * Math.cos ( 3.124976 + 130439.515708 * t);
        MercuryLat3+= 2.0 * Math.cos ( 6.266424 + 156527.418849 * t);

        MercuryLat4 = 0;
        MercuryLat4+= 4.0 * Math.cos ( 1.745799 + 26087.903142 * t);
        MercuryLat4+= 1.0 * Math.cos ( 3.141593 + 0.000000 * t);

        MercuryLat5 = 0;

        MercuryLat =
        + MercuryLat0 * t0
        + MercuryLat1 * t1
        + MercuryLat2 * t2
        + MercuryLat3 * t3
        + MercuryLat4 * t4
        + MercuryLat5 * t5;

        Lat_T = MercuryLat; 

        MercuryRad0 = 0;
        MercuryRad0+= 39528272.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryRad0+= 7834132.0 * Math.cos ( 6.192337 + 26087.903142 * t);
        MercuryRad0+= 795526.0 * Math.cos ( 2.959897 + 52175.806283 * t);
        MercuryRad0+= 121282.0 * Math.cos ( 6.010642 + 78263.709425 * t);
        MercuryRad0+= 21922.0 * Math.cos ( 2.778201 + 104351.612566 * t);
        MercuryRad0+= 4354.0 * Math.cos ( 5.828945 + 130439.515708 * t);
        MercuryRad0+= 918.0 * Math.cos ( 2.596506 + 156527.418849 * t);
        MercuryRad0+= 290.0 * Math.cos ( 1.424419 + 25028.521211 * t);
        MercuryRad0+= 260.0 * Math.cos ( 3.028178 + 27197.281694 * t);
        MercuryRad0+= 202.0 * Math.cos ( 5.647250 + 182615.321991 * t);
        MercuryRad0+= 201.0 * Math.cos ( 5.592277 + 31749.235191 * t);
        MercuryRad0+= 142.0 * Math.cos ( 6.252642 + 24978.524589 * t);
        MercuryRad0+= 100.0 * Math.cos ( 3.734356 + 21535.949645 * t);

        MercuryRad1 = 0;
        MercuryRad1+= 217348.0 * Math.cos ( 4.656172 + 26087.903142 * t);
        MercuryRad1+= 44142.0 * Math.cos ( 1.423855 + 52175.806283 * t);
        MercuryRad1+= 10094.0 * Math.cos ( 4.474663 + 78263.709425 * t);
        MercuryRad1+= 2433.0 * Math.cos ( 1.242261 + 104351.612566 * t);
        MercuryRad1+= 1624.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MercuryRad1+= 604.0 * Math.cos ( 4.293031 + 130439.515708 * t);
        MercuryRad1+= 153.0 * Math.cos ( 1.060608 + 156527.418849 * t);
        MercuryRad1+= 39.0 * Math.cos ( 4.111368 + 182615.321991 * t);

        MercuryRad2 = 0;
        MercuryRad2+= 3118.0 * Math.cos ( 3.082318 + 26087.903142 * t);
        MercuryRad2+= 1245.0 * Math.cos ( 6.151833 + 52175.806283 * t);
        MercuryRad2+= 425.0 * Math.cos ( 2.925834 + 78263.709425 * t);
        MercuryRad2+= 136.0 * Math.cos ( 5.979839 + 104351.612566 * t);
        MercuryRad2+= 42.0 * Math.cos ( 2.749370 + 130439.515708 * t);
        MercuryRad2+= 22.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MercuryRad2+= 13.0 * Math.cos ( 5.801432 + 156527.418849 * t);

        MercuryRad3 = 0;
        MercuryRad3+= 33.0 * Math.cos ( 1.679716 + 26087.903142 * t);
        MercuryRad3+= 24.0 * Math.cos ( 4.634032 + 52175.806283 * t);
        MercuryRad3+= 12.0 * Math.cos ( 1.389838 + 78263.709425 * t);
        MercuryRad3+= 5.0 * Math.cos ( 4.439154 + 104351.612566 * t);
        MercuryRad3+= 2.0 * Math.cos ( 1.207339 + 130439.515708 * t);

        MercuryRad4 = 0;

        MercuryRad5 = 0;

        MercuryRad =
        + MercuryRad0 * t0
        + MercuryRad1 * t1
        + MercuryRad2 * t2
        + MercuryRad3 * t3
        + MercuryRad4 * t4
        + MercuryRad5 * t5;

        Rad_T = MercuryRad; 
    }


    //Venus
    if (id00==2) {
        VenusLon0 = 0;
        VenusLon0+= 317614667.0 * Math.cos ( 0.000000 + 0.000000 * t);
        VenusLon0+= 1353968.0 * Math.cos ( 5.593133 + 10213.285546 * t);
        VenusLon0+= 89892.0 * Math.cos ( 5.306500 + 20426.571092 * t);
        VenusLon0+= 5477.0 * Math.cos ( 4.416307 + 7860.419392 * t);
        VenusLon0+= 3456.0 * Math.cos ( 2.699645 + 11790.629089 * t);
        VenusLon0+= 2372.0 * Math.cos ( 2.993775 + 3930.209696 * t);
        VenusLon0+= 1664.0 * Math.cos ( 4.250189 + 1577.343542 * t);
        VenusLon0+= 1438.0 * Math.cos ( 4.157450 + 9683.594581 * t);
        VenusLon0+= 1317.0 * Math.cos ( 5.186682 + 26.298320 * t);
        VenusLon0+= 1201.0 * Math.cos ( 6.153571 + 30639.856639 * t);
        VenusLon0+= 769.0 * Math.cos ( 0.816296 + 9437.762935 * t);
        VenusLon0+= 761.0 * Math.cos ( 1.950147 + 529.690965 * t);
        VenusLon0+= 708.0 * Math.cos ( 1.064667 + 775.522611 * t);
        VenusLon0+= 585.0 * Math.cos ( 3.998399 + 191.448266 * t);
        VenusLon0+= 500.0 * Math.cos ( 4.123402 + 15720.838785 * t);
        VenusLon0+= 429.0 * Math.cos ( 3.586429 + 19367.189162 * t);
        VenusLon0+= 327.0 * Math.cos ( 5.677366 + 5507.553239 * t);
        VenusLon0+= 326.0 * Math.cos ( 4.590565 + 10404.733812 * t);
        VenusLon0+= 232.0 * Math.cos ( 3.162511 + 9153.903616 * t);
        VenusLon0+= 180.0 * Math.cos ( 4.653379 + 1109.378552 * t);
        VenusLon0+= 155.0 * Math.cos ( 5.570439 + 19651.048481 * t);
        VenusLon0+= 128.0 * Math.cos ( 4.226045 + 20.775395 * t);
        VenusLon0+= 128.0 * Math.cos ( 0.962098 + 5661.332049 * t);
        VenusLon0+= 106.0 * Math.cos ( 1.537212 + 801.820931 * t);

        VenusLon1 = 0;
        VenusLon1+= 1021352943053.0 * Math.cos ( 0.000000 + 0.000000 * t);
        VenusLon1+= 95708.0 * Math.cos ( 2.464244 + 10213.285546 * t);
        VenusLon1+= 14445.0 * Math.cos ( 0.516246 + 20426.571092 * t);
        VenusLon1+= 213.0 * Math.cos ( 1.795479 + 30639.856639 * t);
        VenusLon1+= 174.0 * Math.cos ( 2.655359 + 26.298320 * t);
        VenusLon1+= 152.0 * Math.cos ( 6.106353 + 1577.343542 * t);
        VenusLon1+= 82.0 * Math.cos ( 5.702341 + 191.448266 * t);
        VenusLon1+= 70.0 * Math.cos ( 2.681360 + 9437.762935 * t);
        VenusLon1+= 52.0 * Math.cos ( 3.600131 + 775.522611 * t);
        VenusLon1+= 38.0 * Math.cos ( 1.033790 + 529.690965 * t);
        VenusLon1+= 30.0 * Math.cos ( 1.250563 + 5507.553239 * t);
        VenusLon1+= 25.0 * Math.cos ( 6.106648 + 10404.733812 * t);

        VenusLon2 = 0;
        VenusLon2+= 54127.0 * Math.cos ( 0.000000 + 0.000000 * t);
        VenusLon2+= 3891.0 * Math.cos ( 0.345144 + 10213.285546 * t);
        VenusLon2+= 1338.0 * Math.cos ( 2.020113 + 20426.571092 * t);
        VenusLon2+= 24.0 * Math.cos ( 2.045921 + 26.298320 * t);
        VenusLon2+= 19.0 * Math.cos ( 3.535274 + 30639.856639 * t);
        VenusLon2+= 10.0 * Math.cos ( 3.971302 + 775.522611 * t);
        VenusLon2+= 7.0 * Math.cos ( 1.519626 + 1577.343542 * t);
        VenusLon2+= 6.0 * Math.cos ( 0.999268 + 191.448266 * t);

        VenusLon3 = 0;
        VenusLon3+= 136.0 * Math.cos ( 4.803890 + 10213.285546 * t);
        VenusLon3+= 78.0 * Math.cos ( 3.668764 + 20426.571092 * t);
        VenusLon3+= 26.0 * Math.cos ( 0.000000 + 0.000000 * t);

        VenusLon4 = 0;
        VenusLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);
        VenusLon4+= 3.0 * Math.cos ( 5.205142 + 20426.571092 * t);
        VenusLon4+= 2.0 * Math.cos ( 2.510996 + 10213.285546 * t);

        VenusLon5 = 0;
        VenusLon5+= 1.0 * Math.cos ( 3.141593 + 0.000000 * t);

        VenusLon =
        + VenusLon0 * t0
        + VenusLon1 * t1
        + VenusLon2 * t2
        + VenusLon3 * t3
        + VenusLon4 * t4
        + VenusLon5 * t5;

        Lon_T = VenusLon; 

        VenusLat0 = 0;
        VenusLat0+= 5923638.0 * Math.cos ( 0.267028 + 10213.285546 * t);
        VenusLat0+= 40108.0 * Math.cos ( 1.147372 + 20426.571092 * t);
        VenusLat0+= 32815.0 * Math.cos ( 3.141593 + 0.000000 * t);
        VenusLat0+= 1011.0 * Math.cos ( 1.089461 + 30639.856639 * t);
        VenusLat0+= 149.0 * Math.cos ( 6.253903 + 18073.704939 * t);
        VenusLat0+= 138.0 * Math.cos ( 0.860201 + 1577.343542 * t);
        VenusLat0+= 130.0 * Math.cos ( 3.671525 + 9437.762935 * t);
        VenusLat0+= 120.0 * Math.cos ( 3.704688 + 2352.866154 * t);
        VenusLat0+= 108.0 * Math.cos ( 4.539037 + 22003.914635 * t);

        VenusLat1 = 0;
        VenusLat1+= 513348.0 * Math.cos ( 1.803643 + 10213.285546 * t);
        VenusLat1+= 4380.0 * Math.cos ( 3.386157 + 20426.571092 * t);
        VenusLat1+= 199.0 * Math.cos ( 0.000000 + 0.000000 * t);
        VenusLat1+= 197.0 * Math.cos ( 2.530012 + 30639.856639 * t);

        VenusLat2 = 0;
        VenusLat2+= 22378.0 * Math.cos ( 3.385091 + 10213.285546 * t);
        VenusLat2+= 282.0 * Math.cos ( 0.000000 + 0.000000 * t);
        VenusLat2+= 173.0 * Math.cos ( 5.255638 + 20426.571092 * t);
        VenusLat2+= 27.0 * Math.cos ( 3.870409 + 30639.856639 * t);

        VenusLat3 = 0;
        VenusLat3+= 647.0 * Math.cos ( 4.991666 + 10213.285546 * t);
        VenusLat3+= 20.0 * Math.cos ( 3.141593 + 0.000000 * t);
        VenusLat3+= 6.0 * Math.cos ( 0.773769 + 20426.571092 * t);
        VenusLat3+= 3.0 * Math.cos ( 5.444938 + 30639.856639 * t);

        VenusLat4 = 0;
        VenusLat4+= 14.0 * Math.cos ( 0.315372 + 10213.285546 * t);

        VenusLat5 = 0;

        VenusLat =
        + VenusLat0 * t0
        + VenusLat1 * t1
        + VenusLat2 * t2
        + VenusLat3 * t3
        + VenusLat4 * t4
        + VenusLat5 * t5;

        Lat_T = VenusLat; 

        VenusRad0 = 0;
        VenusRad0+= 72334821.0 * Math.cos ( 0.000000 + 0.000000 * t);
        VenusRad0+= 489824.0 * Math.cos ( 4.021518 + 10213.285546 * t);
        VenusRad0+= 1658.0 * Math.cos ( 4.902067 + 20426.571092 * t);
        VenusRad0+= 1632.0 * Math.cos ( 2.845489 + 7860.419392 * t);
        VenusRad0+= 1378.0 * Math.cos ( 1.128466 + 11790.629089 * t);
        VenusRad0+= 498.0 * Math.cos ( 2.586822 + 9683.594581 * t);
        VenusRad0+= 374.0 * Math.cos ( 1.423148 + 3930.209696 * t);
        VenusRad0+= 264.0 * Math.cos ( 5.529382 + 9437.762935 * t);
        VenusRad0+= 237.0 * Math.cos ( 2.551359 + 15720.838785 * t);
        VenusRad0+= 222.0 * Math.cos ( 2.013468 + 19367.189162 * t);
        VenusRad0+= 126.0 * Math.cos ( 2.727698 + 1577.343542 * t);
        VenusRad0+= 119.0 * Math.cos ( 3.019754 + 10404.733812 * t);

        VenusRad1 = 0;
        VenusRad1+= 34551.0 * Math.cos ( 0.891987 + 10213.285546 * t);
        VenusRad1+= 234.0 * Math.cos ( 1.772249 + 20426.571092 * t);
        VenusRad1+= 234.0 * Math.cos ( 3.141593 + 0.000000 * t);

        VenusRad2 = 0;
        VenusRad2+= 1407.0 * Math.cos ( 5.063664 + 10213.285546 * t);
        VenusRad2+= 16.0 * Math.cos ( 5.473217 + 20426.571092 * t);
        VenusRad2+= 13.0 * Math.cos ( 0.000000 + 0.000000 * t);

        VenusRad3 = 0;
        VenusRad3+= 50.0 * Math.cos ( 3.222636 + 10213.285546 * t);

        VenusRad4 = 0;
        VenusRad4+= 1.0 * Math.cos ( 0.922297 + 10213.285546 * t);

        VenusRad5 = 0;

        VenusRad =
        + VenusRad0 * t0
        + VenusRad1 * t1
        + VenusRad2 * t2
        + VenusRad3 * t3
        + VenusRad4 * t4
        + VenusRad5 * t5;

        Rad_T = VenusRad; 
    }

    //Earth
    if (id00==3) {

        EarthLon0 = 0;
    	EarthLon0+= 175347046.0 * Math.cos ( 0.000000 + 0.000000 * t);
    	EarthLon0+= 3341656.0 * Math.cos ( 4.669257 + 6283.075850 * t);
    	EarthLon0+= 34894.0 * Math.cos ( 4.626102 + 12566.151700 * t);
    	EarthLon0+= 3497.0 * Math.cos ( 2.744118 + 5753.384885 * t);
    	EarthLon0+= 3418.0 * Math.cos ( 2.828866 + 3.523118 * t);
    	EarthLon0+= 3136.0 * Math.cos ( 3.627670 + 77713.771468 * t);
    	EarthLon0+= 2676.0 * Math.cos ( 4.418084 + 7860.419392 * t);
    	EarthLon0+= 2343.0 * Math.cos ( 6.135162 + 3930.209696 * t);
    	EarthLon0+= 1324.0 * Math.cos ( 0.742464 + 11506.769770 * t);
    	EarthLon0+= 1273.0 * Math.cos ( 2.037097 + 529.690965 * t);
    	EarthLon0+= 1199.0 * Math.cos ( 1.109629 + 1577.343542 * t);
    	EarthLon0+= 990.0 * Math.cos ( 5.232681 + 5884.926847 * t);
    	EarthLon0+= 902.0 * Math.cos ( 2.045054 + 26.298320 * t);
    	EarthLon0+= 857.0 * Math.cos ( 3.508492 + 398.149003 * t);
    	EarthLon0+= 780.0 * Math.cos ( 1.178827 + 5223.693920 * t);
    	EarthLon0+= 753.0 * Math.cos ( 2.533391 + 5507.553239 * t);
    	EarthLon0+= 505.0 * Math.cos ( 4.582926 + 18849.227550 * t);
    	EarthLon0+= 492.0 * Math.cos ( 4.205066 + 775.522611 * t);
    	EarthLon0+= 357.0 * Math.cos ( 2.919541 + 0.067310 * t);
    	EarthLon0+= 317.0 * Math.cos ( 5.849020 + 11790.629089 * t);
    	EarthLon0+= 284.0 * Math.cos ( 1.898690 + 796.298007 * t);
    	EarthLon0+= 271.0 * Math.cos ( 0.314886 + 10977.078805 * t);
    	EarthLon0+= 243.0 * Math.cos ( 0.344811 + 5486.777843 * t);
    	EarthLon0+= 206.0 * Math.cos ( 4.806466 + 2544.314420 * t);
    	EarthLon0+= 205.0 * Math.cos ( 1.869478 + 5573.142801 * t);
    	EarthLon0+= 202.0 * Math.cos ( 2.457678 + 6069.776755 * t);
    	EarthLon0+= 156.0 * Math.cos ( 0.833061 + 213.299095 * t);
    	EarthLon0+= 132.0 * Math.cos ( 3.411183 + 2942.463423 * t);
    	EarthLon0+= 126.0 * Math.cos ( 1.083026 + 20.775395 * t);
    	EarthLon0+= 115.0 * Math.cos ( 0.645449 + 0.980321 * t);
    	EarthLon0+= 103.0 * Math.cos ( 0.635998 + 4694.002955 * t);
    	EarthLon0+= 102.0 * Math.cos ( 0.975692 + 15720.838785 * t);
    	EarthLon0+= 102.0 * Math.cos ( 4.266798 + 7.113547 * t);
    	EarthLon0+= 99.0 * Math.cos ( 6.209929 + 2146.165416 * t);
    	EarthLon0+= 98.0 * Math.cos ( 0.681013 + 155.420399 * t);
    	EarthLon0+= 86.0 * Math.cos ( 5.983226 + 161000.685738 * t);
    	EarthLon0+= 85.0 * Math.cos ( 1.298707 + 6275.962303 * t);
    	EarthLon0+= 85.0 * Math.cos ( 3.670801 + 71430.695618 * t);
    	EarthLon0+= 80.0 * Math.cos ( 1.807913 + 17260.154655 * t);
    	EarthLon0+= 79.0 * Math.cos ( 3.036983 + 12036.460735 * t);
    	EarthLon0+= 75.0 * Math.cos ( 1.755089 + 5088.628840 * t);
    	EarthLon0+= 74.0 * Math.cos ( 3.503194 + 3154.687085 * t);
    	EarthLon0+= 74.0 * Math.cos ( 4.679266 + 801.820931 * t);
    	EarthLon0+= 70.0 * Math.cos ( 0.832976 + 9437.762935 * t);
    	EarthLon0+= 62.0 * Math.cos ( 3.977639 + 8827.390270 * t);
    	EarthLon0+= 61.0 * Math.cos ( 1.818398 + 7084.896781 * t);
    	EarthLon0+= 57.0 * Math.cos ( 2.784304 + 6286.598968 * t);
    	EarthLon0+= 56.0 * Math.cos ( 4.386949 + 14143.495242 * t);
    	EarthLon0+= 56.0 * Math.cos ( 3.470060 + 6279.552732 * t);
    	EarthLon0+= 52.0 * Math.cos ( 0.189149 + 12139.553509 * t);
    	EarthLon0+= 52.0 * Math.cos ( 1.332827 + 1748.016413 * t);
    	EarthLon0+= 51.0 * Math.cos ( 0.283069 + 5856.477659 * t);
    	EarthLon0+= 49.0 * Math.cos ( 0.487351 + 1194.447010 * t);
    	EarthLon0+= 41.0 * Math.cos ( 5.368174 + 8429.241266 * t);
    	EarthLon0+= 41.0 * Math.cos ( 2.398509 + 19651.048481 * t);
    	EarthLon0+= 39.0 * Math.cos ( 6.168330 + 10447.387840 * t);
    	EarthLon0+= 37.0 * Math.cos ( 6.041339 + 10213.285546 * t);
    	EarthLon0+= 37.0 * Math.cos ( 2.569552 + 1059.381930 * t);
    	EarthLon0+= 36.0 * Math.cos ( 1.708761 + 2352.866154 * t);
    	EarthLon0+= 36.0 * Math.cos ( 1.775973 + 6812.766815 * t);
    	EarthLon0+= 33.0 * Math.cos ( 0.593095 + 17789.845620 * t);
    	EarthLon0+= 30.0 * Math.cos ( 0.442945 + 83996.847318 * t);
    	EarthLon0+= 30.0 * Math.cos ( 2.739751 + 1349.867410 * t);
    	EarthLon0+= 25.0 * Math.cos ( 3.164710 + 4690.479836 * t);

    	EarthLon1 = 0;
    	EarthLon1+= 628331966747.0 * Math.cos ( 0.000000 + 0.000000 * t);
    	EarthLon1+= 206059.0 * Math.cos ( 2.678235 + 6283.075850 * t);
    	EarthLon1+= 4303.0 * Math.cos ( 2.635127 + 12566.151700 * t);
    	EarthLon1+= 425.0 * Math.cos ( 1.590470 + 3.523118 * t);
    	EarthLon1+= 119.0 * Math.cos ( 5.795575 + 26.298320 * t);
    	EarthLon1+= 109.0 * Math.cos ( 2.966180 + 1577.343542 * t);
    	EarthLon1+= 93.0 * Math.cos ( 2.592128 + 18849.227550 * t);
    	EarthLon1+= 72.0 * Math.cos ( 1.138462 + 529.690965 * t);
    	EarthLon1+= 68.0 * Math.cos ( 1.874723 + 398.149003 * t);
    	EarthLon1+= 67.0 * Math.cos ( 4.409182 + 5507.553239 * t);
    	EarthLon1+= 59.0 * Math.cos ( 2.887970 + 5223.693920 * t);
    	EarthLon1+= 56.0 * Math.cos ( 2.174717 + 155.420399 * t);
    	EarthLon1+= 45.0 * Math.cos ( 0.398031 + 796.298007 * t);
    	EarthLon1+= 36.0 * Math.cos ( 0.466247 + 775.522611 * t);
    	EarthLon1+= 29.0 * Math.cos ( 2.647074 + 7.113547 * t);
    	EarthLon1+= 21.0 * Math.cos ( 5.341383 + 0.980321 * t);
    	EarthLon1+= 19.0 * Math.cos ( 1.846283 + 5486.777843 * t);
    	EarthLon1+= 19.0 * Math.cos ( 4.968551 + 213.299095 * t);
    	EarthLon1+= 17.0 * Math.cos ( 2.991169 + 6275.962303 * t);
    	EarthLon1+= 16.0 * Math.cos ( 0.032165 + 2544.314420 * t);
    	EarthLon1+= 16.0 * Math.cos ( 1.430493 + 2146.165416 * t);
    	EarthLon1+= 15.0 * Math.cos ( 1.205324 + 10977.078805 * t);
    	EarthLon1+= 12.0 * Math.cos ( 2.834323 + 1748.016413 * t);
    	EarthLon1+= 12.0 * Math.cos ( 3.258048 + 5088.628840 * t);
    	EarthLon1+= 12.0 * Math.cos ( 5.273798 + 1194.447010 * t);
    	EarthLon1+= 12.0 * Math.cos ( 2.075024 + 4694.002955 * t);
    	EarthLon1+= 11.0 * Math.cos ( 0.766142 + 553.569403 * t);
    	EarthLon1+= 10.0 * Math.cos ( 1.302630 + 6286.598968 * t);
    	EarthLon1+= 10.0 * Math.cos ( 4.239255 + 1349.867410 * t);
    	EarthLon1+= 9.0 * Math.cos ( 2.699571 + 242.728604 * t);
    	EarthLon1+= 9.0 * Math.cos ( 5.644759 + 951.718406 * t);
    	EarthLon1+= 8.0 * Math.cos ( 5.300627 + 2352.866154 * t);
    	EarthLon1+= 6.0 * Math.cos ( 2.650340 + 9437.762935 * t);
    	EarthLon1+= 6.0 * Math.cos ( 4.666326 + 4690.479836 * t);

    	EarthLon2 = 0;
    	EarthLon2+= 52919.0 * Math.cos ( 0.000000 + 0.000000 * t);
    	EarthLon2+= 8720.0 * Math.cos ( 1.072097 + 6283.075850 * t);
    	EarthLon2+= 309.0 * Math.cos ( 0.867288 + 12566.151700 * t);
    	EarthLon2+= 27.0 * Math.cos ( 0.052979 + 3.523118 * t);
    	EarthLon2+= 16.0 * Math.cos ( 5.188267 + 26.298320 * t);
    	EarthLon2+= 16.0 * Math.cos ( 3.684579 + 155.420399 * t);
    	EarthLon2+= 10.0 * Math.cos ( 0.757423 + 18849.227550 * t);
    	EarthLon2+= 9.0 * Math.cos ( 2.057054 + 77713.771468 * t);
    	EarthLon2+= 7.0 * Math.cos ( 0.826733 + 775.522611 * t);
    	EarthLon2+= 5.0 * Math.cos ( 4.662845 + 1577.343542 * t);
    	EarthLon2+= 4.0 * Math.cos ( 1.030572 + 7.113547 * t);
    	EarthLon2+= 4.0 * Math.cos ( 3.440508 + 5573.142801 * t);
    	EarthLon2+= 3.0 * Math.cos ( 5.140746 + 796.298007 * t);
    	EarthLon2+= 3.0 * Math.cos ( 6.052919 + 5507.553239 * t);
    	EarthLon2+= 3.0 * Math.cos ( 1.192465 + 242.728604 * t);
    	EarthLon2+= 3.0 * Math.cos ( 6.116526 + 529.690965 * t);
    	EarthLon2+= 3.0 * Math.cos ( 0.306379 + 398.149003 * t);
    	EarthLon2+= 3.0 * Math.cos ( 2.279928 + 553.569403 * t);
    	EarthLon2+= 2.0 * Math.cos ( 4.381188 + 5223.693920 * t);
    	EarthLon2+= 2.0 * Math.cos ( 3.754353 + 0.980321 * t);

    	EarthLon3 = 0;
    	EarthLon3+= 289.0 * Math.cos ( 5.843842 + 6283.075850 * t);
    	EarthLon3+= 35.0 * Math.cos ( 0.000000 + 0.000000 * t);
    	EarthLon3+= 17.0 * Math.cos ( 5.487669 + 12566.151700 * t);
    	EarthLon3+= 3.0 * Math.cos ( 5.195773 + 155.420399 * t);
    	EarthLon3+= 1.0 * Math.cos ( 4.722003 + 3.523118 * t);
    	EarthLon3+= 1.0 * Math.cos ( 5.300458 + 18849.227550 * t);
    	EarthLon3+= 1.0 * Math.cos ( 5.969259 + 242.728604 * t);

    	EarthLon4 = 0;
    	EarthLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);
    	EarthLon4+= 8.0 * Math.cos ( 4.134466 + 6283.075850 * t);
    	EarthLon4+= 1.0 * Math.cos ( 3.838038 + 12566.151700 * t);

    	EarthLon5 = 0;
    	EarthLon5+= 1.0 * Math.cos ( 3.141593 + 0.000000 * t);

    	EarthLon =
    			+ EarthLon0 * t0
    			+ EarthLon1 * t1
    			+ EarthLon2 * t2
    			+ EarthLon3 * t3
    			+ EarthLon4 * t4
    			+ EarthLon5 * t5;

    	Lon_T = EarthLon;

    	EarthLat0 = 0;
    	EarthLat0+= 280.0 * Math.cos ( 3.198702 + 84334.661581 * t);
    	EarthLat0+= 102.0 * Math.cos ( 5.422486 + 5507.553239 * t);
    	EarthLat0+= 80.0 * Math.cos ( 3.880132 + 5223.693920 * t);
    	EarthLat0+= 44.0 * Math.cos ( 3.704447 + 2352.866154 * t);
    	EarthLat0+= 32.0 * Math.cos ( 4.000264 + 1577.343542 * t);

    	EarthLat1 = 0;
    	EarthLat1+= 9.0 * Math.cos ( 3.897291 + 5507.553239 * t);
    	EarthLat1+= 6.0 * Math.cos ( 1.730389 + 5223.693920 * t);

    	EarthLat2 = 0;

    	EarthLat3 = 0;

    	EarthLat4 = 0;

    	EarthLat5 = 0;

    	EarthLat =
    			+ EarthLat0 * t0
    			+ EarthLat1 * t1
    			+ EarthLat2 * t2
    			+ EarthLat3 * t3
    			+ EarthLat4 * t4
    			+ EarthLat5 * t5;

    	Lat_T = EarthLat;

    	EarthRad0 = 0;
    	EarthRad0+= 100013989.0 * Math.cos ( 0.000000 + 0.000000 * t);
    	EarthRad0+= 1670700.0 * Math.cos ( 3.098464 + 6283.075850 * t);
    	EarthRad0+= 13956.0 * Math.cos ( 3.055246 + 12566.151700 * t);
    	EarthRad0+= 3084.0 * Math.cos ( 5.198467 + 77713.771468 * t);
    	EarthRad0+= 1628.0 * Math.cos ( 1.173877 + 5753.384885 * t);
    	EarthRad0+= 1576.0 * Math.cos ( 2.846852 + 7860.419392 * t);
    	EarthRad0+= 925.0 * Math.cos ( 5.452922 + 11506.769770 * t);
    	EarthRad0+= 542.0 * Math.cos ( 4.564092 + 3930.209696 * t);
    	EarthRad0+= 472.0 * Math.cos ( 3.661000 + 5884.926847 * t);
    	EarthRad0+= 346.0 * Math.cos ( 0.963686 + 5507.553239 * t);
    	EarthRad0+= 329.0 * Math.cos ( 5.899836 + 5223.693920 * t);
    	EarthRad0+= 307.0 * Math.cos ( 0.298671 + 5573.142801 * t);
    	EarthRad0+= 243.0 * Math.cos ( 4.273495 + 11790.629089 * t);
    	EarthRad0+= 212.0 * Math.cos ( 5.847145 + 1577.343542 * t);
    	EarthRad0+= 186.0 * Math.cos ( 5.021944 + 10977.078805 * t);
    	EarthRad0+= 175.0 * Math.cos ( 3.011936 + 18849.227550 * t);
    	EarthRad0+= 110.0 * Math.cos ( 5.055106 + 5486.777843 * t);
    	EarthRad0+= 98.0 * Math.cos ( 0.886813 + 6069.776755 * t);
    	EarthRad0+= 86.0 * Math.cos ( 5.689598 + 15720.838785 * t);
    	EarthRad0+= 86.0 * Math.cos ( 1.270837 + 161000.685738 * t);
    	EarthRad0+= 65.0 * Math.cos ( 0.272506 + 17260.154655 * t);
    	EarthRad0+= 63.0 * Math.cos ( 0.921771 + 529.690965 * t);
    	EarthRad0+= 57.0 * Math.cos ( 2.013743 + 83996.847318 * t);
    	EarthRad0+= 56.0 * Math.cos ( 5.241598 + 71430.695618 * t);
    	EarthRad0+= 49.0 * Math.cos ( 3.245012 + 2544.314420 * t);
    	EarthRad0+= 47.0 * Math.cos ( 2.578051 + 775.522611 * t);
    	EarthRad0+= 45.0 * Math.cos ( 5.537158 + 9437.762935 * t);
    	EarthRad0+= 43.0 * Math.cos ( 6.011102 + 6275.962303 * t);
    	EarthRad0+= 39.0 * Math.cos ( 5.360717 + 4694.002955 * t);
    	EarthRad0+= 38.0 * Math.cos ( 2.392553 + 8827.390270 * t);
    	EarthRad0+= 37.0 * Math.cos ( 0.829529 + 19651.048481 * t);
    	EarthRad0+= 37.0 * Math.cos ( 4.901076 + 12139.553509 * t);
    	EarthRad0+= 36.0 * Math.cos ( 1.674681 + 12036.460735 * t);
    	EarthRad0+= 35.0 * Math.cos ( 1.842707 + 2942.463423 * t);
    	EarthRad0+= 33.0 * Math.cos ( 0.243703 + 7084.896781 * t);
    	EarthRad0+= 32.0 * Math.cos ( 0.183682 + 5088.628840 * t);
    	EarthRad0+= 32.0 * Math.cos ( 1.777756 + 398.149003 * t);
    	EarthRad0+= 28.0 * Math.cos ( 1.213449 + 6286.598968 * t);
    	EarthRad0+= 28.0 * Math.cos ( 1.899343 + 6279.552732 * t);
    	EarthRad0+= 26.0 * Math.cos ( 4.588969 + 10447.387840 * t);

    	EarthRad1 = 0;
    	EarthRad1+= 103019.0 * Math.cos ( 1.107490 + 6283.075850 * t);
    	EarthRad1+= 1721.0 * Math.cos ( 1.064423 + 12566.151700 * t);
    	EarthRad1+= 702.0 * Math.cos ( 3.141593 + 0.000000 * t);
    	EarthRad1+= 32.0 * Math.cos ( 1.021691 + 18849.227550 * t);
    	EarthRad1+= 31.0 * Math.cos ( 2.843538 + 5507.553239 * t);
    	EarthRad1+= 25.0 * Math.cos ( 1.319067 + 5223.693920 * t);
    	EarthRad1+= 18.0 * Math.cos ( 1.424297 + 1577.343542 * t);
    	EarthRad1+= 10.0 * Math.cos ( 5.913782 + 10977.078805 * t);
    	EarthRad1+= 9.0 * Math.cos ( 1.420469 + 6275.962303 * t);
    	EarthRad1+= 9.0 * Math.cos ( 0.271462 + 5486.777843 * t);

    	EarthRad2 = 0;
    	EarthRad2+= 4359.0 * Math.cos ( 5.784551 + 6283.075850 * t);
    	EarthRad2+= 124.0 * Math.cos ( 5.579347 + 12566.151700 * t);
    	EarthRad2+= 12.0 * Math.cos ( 3.141593 + 0.000000 * t);
    	EarthRad2+= 9.0 * Math.cos ( 3.627777 + 77713.771468 * t);
    	EarthRad2+= 6.0 * Math.cos ( 1.869589 + 5573.142801 * t);
    	EarthRad2+= 3.0 * Math.cos ( 5.470279 + 18849.227550 * t);

    	EarthRad3 = 0;
    	EarthRad3+= 145.0 * Math.cos ( 4.273194 + 6283.075850 * t);
    	EarthRad3+= 7.0 * Math.cos ( 3.916976 + 12566.151700 * t);

    	EarthRad4 = 0;
    	EarthRad4+= 4.0 * Math.cos ( 2.563844 + 6283.075850 * t);

    	EarthRad5 = 0;

    	EarthRad =
    			+ EarthRad0 * t0
    			+ EarthRad1 * t1
    			+ EarthRad2 * t2
    			+ EarthRad3 * t3
    			+ EarthRad4 * t4
    			+ EarthRad5 * t5;

    	Rad_T = EarthRad;

    }

    //Mars
    if (id00==5) {
        MarsLon0 = 0;
        MarsLon0+= 620347712.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsLon0+= 18656368.0 * Math.cos ( 5.050371 + 3340.612427 * t);
        MarsLon0+= 1108217.0 * Math.cos ( 5.400998 + 6681.224853 * t);
        MarsLon0+= 91798.0 * Math.cos ( 5.754787 + 10021.837280 * t);
        MarsLon0+= 27745.0 * Math.cos ( 5.970495 + 3.523118 * t);
        MarsLon0+= 12316.0 * Math.cos ( 0.849561 + 2810.921462 * t);
        MarsLon0+= 10610.0 * Math.cos ( 2.939585 + 2281.230497 * t);
        MarsLon0+= 8927.0 * Math.cos ( 4.156978 + 0.017254 * t);
        MarsLon0+= 8716.0 * Math.cos ( 6.110052 + 13362.449707 * t);
        MarsLon0+= 7775.0 * Math.cos ( 3.339687 + 5621.842923 * t);
        MarsLon0+= 6798.0 * Math.cos ( 0.364622 + 398.149003 * t);
        MarsLon0+= 4161.0 * Math.cos ( 0.228150 + 2942.463423 * t);
        MarsLon0+= 3575.0 * Math.cos ( 1.661865 + 2544.314420 * t);
        MarsLon0+= 3075.0 * Math.cos ( 0.856966 + 191.448266 * t);
        MarsLon0+= 2938.0 * Math.cos ( 6.078937 + 0.067310 * t);
        MarsLon0+= 2628.0 * Math.cos ( 0.648061 + 3337.089308 * t);
        MarsLon0+= 2580.0 * Math.cos ( 0.029967 + 3344.135545 * t);
        MarsLon0+= 2389.0 * Math.cos ( 5.038964 + 796.298007 * t);
        MarsLon0+= 1799.0 * Math.cos ( 0.656340 + 529.690965 * t);
        MarsLon0+= 1546.0 * Math.cos ( 2.915796 + 1751.539531 * t);
        MarsLon0+= 1528.0 * Math.cos ( 1.149793 + 6151.533888 * t);
        MarsLon0+= 1286.0 * Math.cos ( 3.067959 + 2146.165416 * t);
        MarsLon0+= 1264.0 * Math.cos ( 3.622751 + 5092.151958 * t);
        MarsLon0+= 1025.0 * Math.cos ( 3.693343 + 8962.455350 * t);
        MarsLon0+= 892.0 * Math.cos ( 0.182939 + 16703.062133 * t);
        MarsLon0+= 859.0 * Math.cos ( 2.400937 + 2914.014236 * t);
        MarsLon0+= 833.0 * Math.cos ( 4.494958 + 3340.629680 * t);
        MarsLon0+= 833.0 * Math.cos ( 2.464186 + 3340.595173 * t);
        MarsLon0+= 749.0 * Math.cos ( 3.822484 + 155.420399 * t);
        MarsLon0+= 724.0 * Math.cos ( 0.674976 + 3738.761430 * t);
        MarsLon0+= 713.0 * Math.cos ( 3.663360 + 1059.381930 * t);
        MarsLon0+= 655.0 * Math.cos ( 0.488641 + 3127.313331 * t);
        MarsLon0+= 636.0 * Math.cos ( 2.921827 + 8432.764385 * t);
        MarsLon0+= 553.0 * Math.cos ( 4.474789 + 1748.016413 * t);
        MarsLon0+= 550.0 * Math.cos ( 3.810012 + 0.980321 * t);
        MarsLon0+= 472.0 * Math.cos ( 3.625478 + 1194.447010 * t);
        MarsLon0+= 426.0 * Math.cos ( 0.553651 + 6283.075850 * t);
        MarsLon0+= 415.0 * Math.cos ( 0.496623 + 213.299095 * t);
        MarsLon0+= 312.0 * Math.cos ( 0.998533 + 6677.701735 * t);
        MarsLon0+= 307.0 * Math.cos ( 0.380529 + 6684.747972 * t);
        MarsLon0+= 302.0 * Math.cos ( 4.486181 + 3532.060693 * t);
        MarsLon0+= 299.0 * Math.cos ( 2.783237 + 6254.626663 * t);
        MarsLon0+= 293.0 * Math.cos ( 4.221313 + 20.775395 * t);
        MarsLon0+= 284.0 * Math.cos ( 5.768855 + 3149.164161 * t);
        MarsLon0+= 281.0 * Math.cos ( 5.881634 + 1349.867410 * t);
        MarsLon0+= 274.0 * Math.cos ( 0.133725 + 3340.679737 * t);
        MarsLon0+= 274.0 * Math.cos ( 0.542221 + 3340.545116 * t);
        MarsLon0+= 239.0 * Math.cos ( 5.371555 + 4136.910434 * t);
        MarsLon0+= 236.0 * Math.cos ( 5.755045 + 3333.498880 * t);
        MarsLon0+= 231.0 * Math.cos ( 1.282407 + 3870.303392 * t);
        MarsLon0+= 221.0 * Math.cos ( 3.504667 + 382.896532 * t);
        MarsLon0+= 204.0 * Math.cos ( 2.821333 + 1221.848566 * t);
        MarsLon0+= 193.0 * Math.cos ( 3.357151 + 3.590429 * t);
        MarsLon0+= 189.0 * Math.cos ( 1.491030 + 9492.146315 * t);
        MarsLon0+= 179.0 * Math.cos ( 1.005611 + 951.718406 * t);
        MarsLon0+= 174.0 * Math.cos ( 2.413603 + 553.569403 * t);
        MarsLon0+= 172.0 * Math.cos ( 0.439430 + 5486.777843 * t);
        MarsLon0+= 160.0 * Math.cos ( 3.948547 + 4562.460993 * t);
        MarsLon0+= 144.0 * Math.cos ( 1.418742 + 135.065080 * t);
        MarsLon0+= 140.0 * Math.cos ( 3.325925 + 2700.715140 * t);
        MarsLon0+= 138.0 * Math.cos ( 4.301452 + 7.113547 * t);
        MarsLon0+= 131.0 * Math.cos ( 4.044917 + 12303.067777 * t);
        MarsLon0+= 128.0 * Math.cos ( 2.208067 + 1592.596014 * t);
        MarsLon0+= 128.0 * Math.cos ( 1.806656 + 5088.628840 * t);
        MarsLon0+= 117.0 * Math.cos ( 3.128053 + 7903.073420 * t);
        MarsLon0+= 113.0 * Math.cos ( 3.700708 + 1589.072895 * t);
        MarsLon0+= 110.0 * Math.cos ( 1.051951 + 242.728604 * t);
        MarsLon0+= 105.0 * Math.cos ( 0.785354 + 8827.390270 * t);
        MarsLon0+= 100.0 * Math.cos ( 3.243437 + 11773.376812 * t);

        MarsLon1 = 0;
        MarsLon1+= 334085627474.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsLon1+= 1458227.0 * Math.cos ( 3.604261 + 3340.612427 * t);
        MarsLon1+= 164901.0 * Math.cos ( 3.926313 + 6681.224853 * t);
        MarsLon1+= 19963.0 * Math.cos ( 4.265941 + 10021.837280 * t);
        MarsLon1+= 3452.0 * Math.cos ( 4.732104 + 3.523118 * t);
        MarsLon1+= 2485.0 * Math.cos ( 4.612776 + 13362.449707 * t);
        MarsLon1+= 842.0 * Math.cos ( 4.458583 + 2281.230497 * t);
        MarsLon1+= 538.0 * Math.cos ( 5.015897 + 398.149003 * t);
        MarsLon1+= 521.0 * Math.cos ( 4.994227 + 3344.135545 * t);
        MarsLon1+= 433.0 * Math.cos ( 2.560664 + 191.448266 * t);
        MarsLon1+= 430.0 * Math.cos ( 5.316462 + 155.420399 * t);
        MarsLon1+= 382.0 * Math.cos ( 3.538813 + 796.298007 * t);
        MarsLon1+= 314.0 * Math.cos ( 4.963353 + 16703.062133 * t);
        MarsLon1+= 283.0 * Math.cos ( 3.159675 + 2544.314420 * t);
        MarsLon1+= 206.0 * Math.cos ( 4.568915 + 2146.165416 * t);
        MarsLon1+= 169.0 * Math.cos ( 1.328948 + 3337.089308 * t);
        MarsLon1+= 158.0 * Math.cos ( 4.185010 + 1751.539531 * t);
        MarsLon1+= 134.0 * Math.cos ( 2.233251 + 0.980321 * t);
        MarsLon1+= 134.0 * Math.cos ( 5.974219 + 1748.016413 * t);
        MarsLon1+= 118.0 * Math.cos ( 6.024072 + 6151.533888 * t);
        MarsLon1+= 117.0 * Math.cos ( 2.213477 + 1059.381930 * t);
        MarsLon1+= 114.0 * Math.cos ( 2.128695 + 1194.447010 * t);
        MarsLon1+= 114.0 * Math.cos ( 5.428032 + 3738.761430 * t);
        MarsLon1+= 91.0 * Math.cos ( 1.096278 + 1349.867410 * t);
        MarsLon1+= 85.0 * Math.cos ( 3.908548 + 553.569403 * t);
        MarsLon1+= 83.0 * Math.cos ( 5.296366 + 6684.747972 * t);
        MarsLon1+= 81.0 * Math.cos ( 4.428134 + 529.690965 * t);
        MarsLon1+= 80.0 * Math.cos ( 2.248643 + 8962.455350 * t);
        MarsLon1+= 73.0 * Math.cos ( 2.501895 + 951.718406 * t);
        MarsLon1+= 73.0 * Math.cos ( 5.842082 + 242.728604 * t);
        MarsLon1+= 71.0 * Math.cos ( 3.856361 + 2914.014236 * t);
        MarsLon1+= 68.0 * Math.cos ( 5.023277 + 382.896532 * t);
        MarsLon1+= 65.0 * Math.cos ( 1.018024 + 3340.595173 * t);
        MarsLon1+= 65.0 * Math.cos ( 3.048796 + 3340.629680 * t);
        MarsLon1+= 62.0 * Math.cos ( 4.151832 + 3149.164161 * t);
        MarsLon1+= 57.0 * Math.cos ( 3.888137 + 4136.910434 * t);
        MarsLon1+= 48.0 * Math.cos ( 4.873621 + 213.299095 * t);
        MarsLon1+= 48.0 * Math.cos ( 1.182380 + 3333.498880 * t);
        MarsLon1+= 47.0 * Math.cos ( 1.314524 + 3185.192027 * t);
        MarsLon1+= 41.0 * Math.cos ( 0.713854 + 1592.596014 * t);
        MarsLon1+= 40.0 * Math.cos ( 2.725425 + 7.113547 * t);
        MarsLon1+= 40.0 * Math.cos ( 5.316119 + 20043.674560 * t);
        MarsLon1+= 33.0 * Math.cos ( 5.410674 + 6283.075850 * t);
        MarsLon1+= 28.0 * Math.cos ( 0.045341 + 9492.146315 * t);
        MarsLon1+= 27.0 * Math.cos ( 3.889607 + 1221.848566 * t);
        MarsLon1+= 27.0 * Math.cos ( 5.112717 + 2700.715140 * t);

        MarsLon2 = 0;
        MarsLon2+= 58016.0 * Math.cos ( 2.049795 + 3340.612427 * t);
        MarsLon2+= 54188.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsLon2+= 13908.0 * Math.cos ( 2.457424 + 6681.224853 * t);
        MarsLon2+= 2465.0 * Math.cos ( 2.800000 + 10021.837280 * t);
        MarsLon2+= 398.0 * Math.cos ( 3.141184 + 13362.449707 * t);
        MarsLon2+= 222.0 * Math.cos ( 3.194361 + 3.523118 * t);
        MarsLon2+= 121.0 * Math.cos ( 0.543253 + 155.420399 * t);
        MarsLon2+= 62.0 * Math.cos ( 3.485294 + 16703.062133 * t);
        MarsLon2+= 54.0 * Math.cos ( 3.541911 + 3344.135545 * t);
        MarsLon2+= 34.0 * Math.cos ( 6.001885 + 2281.230497 * t);
        MarsLon2+= 32.0 * Math.cos ( 4.140152 + 191.448266 * t);
        MarsLon2+= 30.0 * Math.cos ( 1.998707 + 796.298007 * t);
        MarsLon2+= 23.0 * Math.cos ( 4.334034 + 242.728604 * t);
        MarsLon2+= 22.0 * Math.cos ( 3.445325 + 398.149003 * t);
        MarsLon2+= 20.0 * Math.cos ( 5.421914 + 553.569403 * t);
        MarsLon2+= 16.0 * Math.cos ( 0.656790 + 0.980321 * t);
        MarsLon2+= 16.0 * Math.cos ( 6.110005 + 2146.165416 * t);
        MarsLon2+= 16.0 * Math.cos ( 1.220861 + 1748.016413 * t);
        MarsLon2+= 15.0 * Math.cos ( 6.095418 + 3185.192027 * t);
        MarsLon2+= 14.0 * Math.cos ( 4.019238 + 951.718406 * t);
        MarsLon2+= 14.0 * Math.cos ( 2.618519 + 1349.867410 * t);
        MarsLon2+= 13.0 * Math.cos ( 0.601890 + 1194.447010 * t);
        MarsLon2+= 12.0 * Math.cos ( 3.861222 + 6684.747972 * t);
        MarsLon2+= 11.0 * Math.cos ( 4.718224 + 2544.314420 * t);
        MarsLon2+= 10.0 * Math.cos ( 0.250387 + 382.896532 * t);
        MarsLon2+= 9.0 * Math.cos ( 0.681707 + 1059.381930 * t);
        MarsLon2+= 9.0 * Math.cos ( 3.832091 + 20043.674560 * t);
        MarsLon2+= 9.0 * Math.cos ( 3.882718 + 3738.761430 * t);
        MarsLon2+= 8.0 * Math.cos ( 5.464986 + 1751.539531 * t);
        MarsLon2+= 7.0 * Math.cos ( 2.575225 + 3149.164161 * t);
        MarsLon2+= 7.0 * Math.cos ( 2.378437 + 4136.910434 * t);
        MarsLon2+= 6.0 * Math.cos ( 5.477731 + 1592.596014 * t);
        MarsLon2+= 6.0 * Math.cos ( 2.341048 + 3097.883823 * t);

        MarsLon3 = 0;
        MarsLon3+= 1482.0 * Math.cos ( 0.444347 + 3340.612427 * t);
        MarsLon3+= 662.0 * Math.cos ( 0.884692 + 6681.224853 * t);
        MarsLon3+= 188.0 * Math.cos ( 1.288000 + 10021.837280 * t);
        MarsLon3+= 41.0 * Math.cos ( 1.648508 + 13362.449707 * t);
        MarsLon3+= 26.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsLon3+= 23.0 * Math.cos ( 2.052677 + 155.420399 * t);
        MarsLon3+= 10.0 * Math.cos ( 1.580069 + 3.523118 * t);
        MarsLon3+= 8.0 * Math.cos ( 1.998588 + 16703.062133 * t);
        MarsLon3+= 5.0 * Math.cos ( 2.824525 + 242.728604 * t);
        MarsLon3+= 4.0 * Math.cos ( 2.019143 + 3344.135545 * t);
        MarsLon3+= 3.0 * Math.cos ( 4.591449 + 3185.192027 * t);
        MarsLon3+= 3.0 * Math.cos ( 0.650447 + 553.569403 * t);

        MarsLon4 = 0;
        MarsLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MarsLon4+= 29.0 * Math.cos ( 5.636624 + 6681.224853 * t);
        MarsLon4+= 24.0 * Math.cos ( 5.138685 + 3340.612427 * t);
        MarsLon4+= 11.0 * Math.cos ( 6.031611 + 10021.837280 * t);
        MarsLon4+= 3.0 * Math.cos ( 0.132284 + 13362.449707 * t);
        MarsLon4+= 3.0 * Math.cos ( 3.562680 + 155.420399 * t);
        MarsLon4+= 1.0 * Math.cos ( 0.493408 + 16703.062133 * t);
        MarsLon4+= 1.0 * Math.cos ( 1.317345 + 242.728604 * t);

        MarsLon5 = 0;
        MarsLon5+= 1.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MarsLon5+= 1.0 * Math.cos ( 4.040900 + 6681.224853 * t);

        MarsLon =
        + MarsLon0 * t0
        + MarsLon1 * t1
        + MarsLon2 * t2
        + MarsLon3 * t3
        + MarsLon4 * t4
        + MarsLon5 * t5;

        Lon_T = MarsLon; 

        MarsLat0 = 0;
        MarsLat0+= 3197135.0 * Math.cos ( 3.768320 + 3340.612427 * t);
        MarsLat0+= 298033.0 * Math.cos ( 4.106170 + 6681.224853 * t);
        MarsLat0+= 289105.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsLat0+= 31366.0 * Math.cos ( 4.446511 + 10021.837280 * t);
        MarsLat0+= 3484.0 * Math.cos ( 4.788125 + 13362.449707 * t);
        MarsLat0+= 443.0 * Math.cos ( 5.026426 + 3344.135545 * t);
        MarsLat0+= 443.0 * Math.cos ( 5.652330 + 3337.089308 * t);
        MarsLat0+= 399.0 * Math.cos ( 5.130568 + 16703.062133 * t);
        MarsLat0+= 293.0 * Math.cos ( 3.792906 + 2281.230497 * t);
        MarsLat0+= 182.0 * Math.cos ( 6.136480 + 6151.533888 * t);
        MarsLat0+= 163.0 * Math.cos ( 4.263996 + 529.690965 * t);
        MarsLat0+= 160.0 * Math.cos ( 2.231946 + 1059.381930 * t);
        MarsLat0+= 149.0 * Math.cos ( 2.165012 + 5621.842923 * t);
        MarsLat0+= 143.0 * Math.cos ( 1.182150 + 3340.595173 * t);
        MarsLat0+= 143.0 * Math.cos ( 3.212922 + 3340.629680 * t);
        MarsLat0+= 139.0 * Math.cos ( 2.417963 + 8962.455350 * t);

        MarsLat1 = 0;
        MarsLat1+= 350069.0 * Math.cos ( 5.368478 + 3340.612427 * t);
        MarsLat1+= 14116.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MarsLat1+= 9671.0 * Math.cos ( 5.478778 + 6681.224853 * t);
        MarsLat1+= 1472.0 * Math.cos ( 3.202058 + 10021.837280 * t);
        MarsLat1+= 426.0 * Math.cos ( 3.408438 + 13362.449707 * t);
        MarsLat1+= 102.0 * Math.cos ( 0.776173 + 3337.089308 * t);
        MarsLat1+= 79.0 * Math.cos ( 3.717683 + 16703.062133 * t);
        MarsLat1+= 33.0 * Math.cos ( 3.458037 + 5621.842923 * t);
        MarsLat1+= 26.0 * Math.cos ( 2.482936 + 2281.230497 * t);

        MarsLat2 = 0;
        MarsLat2+= 16727.0 * Math.cos ( 0.602214 + 3340.612427 * t);
        MarsLat2+= 4987.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MarsLat2+= 302.0 * Math.cos ( 5.558713 + 6681.224853 * t);
        MarsLat2+= 26.0 * Math.cos ( 1.896627 + 13362.449707 * t);
        MarsLat2+= 21.0 * Math.cos ( 0.917500 + 10021.837280 * t);
        MarsLat2+= 12.0 * Math.cos ( 2.242407 + 3337.089308 * t);
        MarsLat2+= 8.0 * Math.cos ( 2.248929 + 16703.062133 * t);

        MarsLat3 = 0;
        MarsLat3+= 607.0 * Math.cos ( 1.980506 + 3340.612427 * t);
        MarsLat3+= 43.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsLat3+= 14.0 * Math.cos ( 1.795882 + 6681.224853 * t);
        MarsLat3+= 3.0 * Math.cos ( 3.453771 + 10021.837280 * t);

        MarsLat4 = 0;
        MarsLat4+= 13.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsLat4+= 11.0 * Math.cos ( 3.457244 + 3340.612427 * t);
        MarsLat4+= 1.0 * Math.cos ( 0.504458 + 6681.224853 * t);

        MarsLat5 = 0;

        MarsLat =
        + MarsLat0 * t0
        + MarsLat1 * t1
        + MarsLat2 * t2
        + MarsLat3 * t3
        + MarsLat4 * t4
        + MarsLat5 * t5;

        Lat_T = MarsLat; 

        MarsRad0 = 0;
        MarsRad0+= 153033488.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsRad0+= 14184953.0 * Math.cos ( 3.479713 + 3340.612427 * t);
        MarsRad0+= 660776.0 * Math.cos ( 3.817834 + 6681.224853 * t);
        MarsRad0+= 46179.0 * Math.cos ( 4.155953 + 10021.837280 * t);
        MarsRad0+= 8110.0 * Math.cos ( 5.559585 + 2810.921462 * t);
        MarsRad0+= 7485.0 * Math.cos ( 1.772390 + 5621.842923 * t);
        MarsRad0+= 5523.0 * Math.cos ( 1.364363 + 2281.230497 * t);
        MarsRad0+= 3825.0 * Math.cos ( 4.494072 + 13362.449707 * t);
        MarsRad0+= 2484.0 * Math.cos ( 4.925456 + 2942.463423 * t);
        MarsRad0+= 2307.0 * Math.cos ( 0.090817 + 2544.314420 * t);
        MarsRad0+= 1999.0 * Math.cos ( 5.360596 + 3337.089308 * t);
        MarsRad0+= 1960.0 * Math.cos ( 4.742494 + 3344.135545 * t);
        MarsRad0+= 1167.0 * Math.cos ( 2.112615 + 5092.151958 * t);
        MarsRad0+= 1103.0 * Math.cos ( 5.009083 + 398.149003 * t);
        MarsRad0+= 992.0 * Math.cos ( 5.838624 + 6151.533888 * t);
        MarsRad0+= 899.0 * Math.cos ( 4.407904 + 529.690965 * t);
        MarsRad0+= 807.0 * Math.cos ( 2.102166 + 1059.381930 * t);
        MarsRad0+= 798.0 * Math.cos ( 3.448390 + 796.298007 * t);
        MarsRad0+= 741.0 * Math.cos ( 1.499063 + 2146.165416 * t);
        MarsRad0+= 726.0 * Math.cos ( 1.245169 + 8432.764385 * t);
        MarsRad0+= 692.0 * Math.cos ( 2.133788 + 8962.455350 * t);
        MarsRad0+= 633.0 * Math.cos ( 0.893533 + 3340.595173 * t);
        MarsRad0+= 633.0 * Math.cos ( 2.924304 + 3340.629680 * t);
        MarsRad0+= 630.0 * Math.cos ( 1.287381 + 1751.539531 * t);
        MarsRad0+= 574.0 * Math.cos ( 0.828962 + 2914.014236 * t);
        MarsRad0+= 526.0 * Math.cos ( 5.382923 + 3738.761430 * t);
        MarsRad0+= 473.0 * Math.cos ( 5.198505 + 3127.313331 * t);
        MarsRad0+= 348.0 * Math.cos ( 4.832192 + 16703.062133 * t);
        MarsRad0+= 284.0 * Math.cos ( 2.906923 + 3532.060693 * t);
        MarsRad0+= 280.0 * Math.cos ( 5.257492 + 6283.075850 * t);
        MarsRad0+= 276.0 * Math.cos ( 1.217680 + 6254.626663 * t);
        MarsRad0+= 275.0 * Math.cos ( 2.908189 + 1748.016413 * t);
        MarsRad0+= 270.0 * Math.cos ( 3.763947 + 5884.926847 * t);
        MarsRad0+= 239.0 * Math.cos ( 2.036699 + 1194.447010 * t);
        MarsRad0+= 234.0 * Math.cos ( 5.105465 + 5486.777843 * t);
        MarsRad0+= 228.0 * Math.cos ( 3.255290 + 6872.673120 * t);
        MarsRad0+= 223.0 * Math.cos ( 4.198616 + 3149.164161 * t);
        MarsRad0+= 219.0 * Math.cos ( 5.583402 + 191.448266 * t);
        MarsRad0+= 208.0 * Math.cos ( 4.846264 + 3340.679737 * t);
        MarsRad0+= 208.0 * Math.cos ( 5.254761 + 3340.545116 * t);
        MarsRad0+= 186.0 * Math.cos ( 5.698716 + 6677.701735 * t);
        MarsRad0+= 183.0 * Math.cos ( 5.080627 + 6684.747972 * t);
        MarsRad0+= 179.0 * Math.cos ( 4.184230 + 3333.498880 * t);
        MarsRad0+= 176.0 * Math.cos ( 5.953418 + 3870.303392 * t);
        MarsRad0+= 164.0 * Math.cos ( 3.798891 + 4136.910434 * t);

        MarsRad1 = 0;
        MarsRad1+= 1107433.0 * Math.cos ( 2.032505 + 3340.612427 * t);
        MarsRad1+= 103176.0 * Math.cos ( 2.370718 + 6681.224853 * t);
        MarsRad1+= 12877.0 * Math.cos ( 0.000000 + 0.000000 * t);
        MarsRad1+= 10816.0 * Math.cos ( 2.708881 + 10021.837280 * t);
        MarsRad1+= 1195.0 * Math.cos ( 3.047022 + 13362.449707 * t);
        MarsRad1+= 439.0 * Math.cos ( 2.888351 + 2281.230497 * t);
        MarsRad1+= 396.0 * Math.cos ( 3.423246 + 3344.135545 * t);
        MarsRad1+= 183.0 * Math.cos ( 1.584286 + 2544.314420 * t);
        MarsRad1+= 136.0 * Math.cos ( 3.385070 + 16703.062133 * t);
        MarsRad1+= 128.0 * Math.cos ( 6.043434 + 3337.089308 * t);
        MarsRad1+= 128.0 * Math.cos ( 0.629912 + 1059.381930 * t);
        MarsRad1+= 127.0 * Math.cos ( 1.953898 + 796.298007 * t);
        MarsRad1+= 118.0 * Math.cos ( 2.997613 + 2146.165416 * t);
        MarsRad1+= 88.0 * Math.cos ( 3.420528 + 398.149003 * t);
        MarsRad1+= 83.0 * Math.cos ( 3.855750 + 3738.761430 * t);
        MarsRad1+= 76.0 * Math.cos ( 4.451018 + 6151.533888 * t);
        MarsRad1+= 72.0 * Math.cos ( 2.764422 + 529.690965 * t);
        MarsRad1+= 67.0 * Math.cos ( 2.548926 + 1751.539531 * t);
        MarsRad1+= 66.0 * Math.cos ( 4.405976 + 1748.016413 * t);
        MarsRad1+= 58.0 * Math.cos ( 0.543543 + 1194.447010 * t);
        MarsRad1+= 54.0 * Math.cos ( 0.677509 + 8962.455350 * t);
        MarsRad1+= 51.0 * Math.cos ( 3.725854 + 6684.747972 * t);
        MarsRad1+= 49.0 * Math.cos ( 5.729594 + 3340.595173 * t);
        MarsRad1+= 49.0 * Math.cos ( 1.477179 + 3340.629680 * t);
        MarsRad1+= 48.0 * Math.cos ( 2.580617 + 3149.164161 * t);
        MarsRad1+= 48.0 * Math.cos ( 2.285279 + 2914.014236 * t);
        MarsRad1+= 39.0 * Math.cos ( 2.319001 + 4136.910434 * t);

        MarsRad2 = 0;
        MarsRad2+= 44242.0 * Math.cos ( 0.479306 + 3340.612427 * t);
        MarsRad2+= 8138.0 * Math.cos ( 0.869984 + 6681.224853 * t);
        MarsRad2+= 1275.0 * Math.cos ( 1.225941 + 10021.837280 * t);
        MarsRad2+= 187.0 * Math.cos ( 1.572990 + 13362.449707 * t);
        MarsRad2+= 52.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MarsRad2+= 41.0 * Math.cos ( 1.970802 + 3344.135545 * t);
        MarsRad2+= 27.0 * Math.cos ( 1.916656 + 16703.062133 * t);
        MarsRad2+= 18.0 * Math.cos ( 4.434995 + 2281.230497 * t);
        MarsRad2+= 12.0 * Math.cos ( 4.525105 + 3185.192027 * t);
        MarsRad2+= 10.0 * Math.cos ( 5.391435 + 1059.381930 * t);
        MarsRad2+= 10.0 * Math.cos ( 0.418706 + 796.298007 * t);

        MarsRad3 = 0;
        MarsRad3+= 1113.0 * Math.cos ( 5.149874 + 3340.612427 * t);
        MarsRad3+= 424.0 * Math.cos ( 5.613438 + 6681.224853 * t);
        MarsRad3+= 100.0 * Math.cos ( 5.997268 + 10021.837280 * t);
        MarsRad3+= 20.0 * Math.cos ( 0.076331 + 13362.449707 * t);
        MarsRad3+= 5.0 * Math.cos ( 3.141593 + 0.000000 * t);
        MarsRad3+= 3.0 * Math.cos ( 0.429519 + 16703.062133 * t);

        MarsRad4 = 0;
        MarsRad4+= 20.0 * Math.cos ( 3.582117 + 3340.612427 * t);
        MarsRad4+= 16.0 * Math.cos ( 4.051161 + 6681.224853 * t);
        MarsRad4+= 6.0 * Math.cos ( 4.463840 + 10021.837280 * t);
        MarsRad4+= 2.0 * Math.cos ( 4.843743 + 13362.449707 * t);

        MarsRad5 = 0;

        MarsRad =
        + MarsRad0 * t0
        + MarsRad1 * t1
        + MarsRad2 * t2
        + MarsRad3 * t3
        + MarsRad4 * t4
        + MarsRad5 * t5;

        Rad_T = MarsRad; 
    }


    //Jupiter
    if (id00==6) {
        JupiterLon0 = 0;
        JupiterLon0+= 59954691.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterLon0+= 9695899.0 * Math.cos ( 5.061918 + 529.690965 * t);
        JupiterLon0+= 573610.0 * Math.cos ( 1.444062 + 7.113547 * t);
        JupiterLon0+= 306389.0 * Math.cos ( 5.417347 + 1059.381930 * t);
        JupiterLon0+= 97178.0 * Math.cos ( 4.142647 + 632.783739 * t);
        JupiterLon0+= 72903.0 * Math.cos ( 3.640429 + 522.577418 * t);
        JupiterLon0+= 64264.0 * Math.cos ( 3.411452 + 103.092774 * t);
        JupiterLon0+= 39806.0 * Math.cos ( 2.293767 + 419.484644 * t);
        JupiterLon0+= 38858.0 * Math.cos ( 1.272317 + 316.391870 * t);
        JupiterLon0+= 27965.0 * Math.cos ( 1.784546 + 536.804512 * t);
        JupiterLon0+= 13590.0 * Math.cos ( 5.774810 + 1589.072895 * t);
        JupiterLon0+= 8769.0 * Math.cos ( 3.630003 + 949.175609 * t);
        JupiterLon0+= 8246.0 * Math.cos ( 3.582280 + 206.185548 * t);
        JupiterLon0+= 7368.0 * Math.cos ( 5.081011 + 735.876514 * t);
        JupiterLon0+= 6263.0 * Math.cos ( 0.024976 + 213.299095 * t);
        JupiterLon0+= 6114.0 * Math.cos ( 4.513195 + 1162.474704 * t);
        JupiterLon0+= 5305.0 * Math.cos ( 4.186251 + 1052.268383 * t);
        JupiterLon0+= 5305.0 * Math.cos ( 1.306712 + 14.227094 * t);
        JupiterLon0+= 4905.0 * Math.cos ( 1.320846 + 110.206321 * t);
        JupiterLon0+= 4647.0 * Math.cos ( 4.699581 + 3.932153 * t);
        JupiterLon0+= 3045.0 * Math.cos ( 4.316760 + 426.598191 * t);
        JupiterLon0+= 2610.0 * Math.cos ( 1.566676 + 846.082835 * t);
        JupiterLon0+= 2028.0 * Math.cos ( 1.063765 + 3.181394 * t);
        JupiterLon0+= 1921.0 * Math.cos ( 0.971689 + 639.897286 * t);
        JupiterLon0+= 1765.0 * Math.cos ( 2.141481 + 1066.495477 * t);
        JupiterLon0+= 1723.0 * Math.cos ( 3.880360 + 1265.567479 * t);
        JupiterLon0+= 1633.0 * Math.cos ( 3.582011 + 515.463871 * t);
        JupiterLon0+= 1432.0 * Math.cos ( 4.296837 + 625.670192 * t);
        JupiterLon0+= 973.0 * Math.cos ( 4.097650 + 95.979227 * t);
        JupiterLon0+= 884.0 * Math.cos ( 2.437014 + 412.371097 * t);
        JupiterLon0+= 733.0 * Math.cos ( 6.085341 + 838.969288 * t);
        JupiterLon0+= 731.0 * Math.cos ( 3.805912 + 1581.959348 * t);
        JupiterLon0+= 709.0 * Math.cos ( 1.292726 + 742.990061 * t);
        JupiterLon0+= 692.0 * Math.cos ( 6.133682 + 2118.763860 * t);
        JupiterLon0+= 614.0 * Math.cos ( 4.108535 + 1478.866574 * t);
        JupiterLon0+= 582.0 * Math.cos ( 4.539677 + 309.278323 * t);
        JupiterLon0+= 495.0 * Math.cos ( 3.755675 + 323.505417 * t);
        JupiterLon0+= 441.0 * Math.cos ( 2.958185 + 454.909367 * t);
        JupiterLon0+= 417.0 * Math.cos ( 1.035544 + 2.447681 * t);
        JupiterLon0+= 390.0 * Math.cos ( 4.897161 + 1692.165670 * t);
        JupiterLon0+= 376.0 * Math.cos ( 4.702991 + 1368.660253 * t);
        JupiterLon0+= 341.0 * Math.cos ( 5.714525 + 533.623118 * t);
        JupiterLon0+= 330.0 * Math.cos ( 4.740498 + 0.048184 * t);
        JupiterLon0+= 262.0 * Math.cos ( 1.876525 + 0.963208 * t);
        JupiterLon0+= 261.0 * Math.cos ( 0.820472 + 380.127768 * t);
        JupiterLon0+= 257.0 * Math.cos ( 3.724107 + 199.072001 * t);
        JupiterLon0+= 244.0 * Math.cos ( 5.220209 + 728.762967 * t);
        JupiterLon0+= 235.0 * Math.cos ( 1.226939 + 909.818733 * t);
        JupiterLon0+= 220.0 * Math.cos ( 1.651150 + 543.918059 * t);
        JupiterLon0+= 207.0 * Math.cos ( 1.854617 + 525.758812 * t);
        JupiterLon0+= 202.0 * Math.cos ( 1.806846 + 1375.773800 * t);
        JupiterLon0+= 197.0 * Math.cos ( 5.292521 + 1155.361157 * t);
        JupiterLon0+= 175.0 * Math.cos ( 3.729666 + 942.062062 * t);
        JupiterLon0+= 175.0 * Math.cos ( 3.226349 + 1898.351218 * t);
        JupiterLon0+= 175.0 * Math.cos ( 5.909735 + 956.289156 * t);
        JupiterLon0+= 158.0 * Math.cos ( 4.364839 + 1795.258444 * t);
        JupiterLon0+= 151.0 * Math.cos ( 3.906250 + 74.781599 * t);
        JupiterLon0+= 149.0 * Math.cos ( 4.377451 + 1685.052123 * t);
        JupiterLon0+= 141.0 * Math.cos ( 3.135684 + 491.557929 * t);
        JupiterLon0+= 138.0 * Math.cos ( 1.317979 + 1169.588251 * t);
        JupiterLon0+= 131.0 * Math.cos ( 4.168679 + 1045.154836 * t);
        JupiterLon0+= 117.0 * Math.cos ( 2.500221 + 1596.186442 * t);
        JupiterLon0+= 117.0 * Math.cos ( 3.389209 + 0.521265 * t);
        JupiterLon0+= 106.0 * Math.cos ( 4.554398 + 526.509571 * t);

        JupiterLon1 = 0;
        JupiterLon1+= 52993480757.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterLon1+= 489741.0 * Math.cos ( 4.220667 + 529.690965 * t);
        JupiterLon1+= 228919.0 * Math.cos ( 6.026475 + 7.113547 * t);
        JupiterLon1+= 27655.0 * Math.cos ( 4.572660 + 1059.381930 * t);
        JupiterLon1+= 20721.0 * Math.cos ( 5.459389 + 522.577418 * t);
        JupiterLon1+= 12106.0 * Math.cos ( 0.169858 + 536.804512 * t);
        JupiterLon1+= 6068.0 * Math.cos ( 4.424195 + 103.092774 * t);
        JupiterLon1+= 5434.0 * Math.cos ( 3.984784 + 419.484644 * t);
        JupiterLon1+= 4238.0 * Math.cos ( 5.890094 + 14.227094 * t);
        JupiterLon1+= 2212.0 * Math.cos ( 5.267714 + 206.185548 * t);
        JupiterLon1+= 1746.0 * Math.cos ( 4.926694 + 1589.072895 * t);
        JupiterLon1+= 1296.0 * Math.cos ( 5.551328 + 3.181394 * t);
        JupiterLon1+= 1173.0 * Math.cos ( 5.856473 + 1052.268383 * t);
        JupiterLon1+= 1163.0 * Math.cos ( 0.514509 + 3.932153 * t);
        JupiterLon1+= 1099.0 * Math.cos ( 5.307050 + 515.463871 * t);
        JupiterLon1+= 1007.0 * Math.cos ( 0.464784 + 735.876514 * t);
        JupiterLon1+= 1004.0 * Math.cos ( 3.150403 + 426.598191 * t);
        JupiterLon1+= 848.0 * Math.cos ( 5.758059 + 110.206321 * t);
        JupiterLon1+= 827.0 * Math.cos ( 4.803120 + 213.299095 * t);
        JupiterLon1+= 816.0 * Math.cos ( 0.586431 + 1066.495477 * t);
        JupiterLon1+= 725.0 * Math.cos ( 5.518275 + 639.897286 * t);
        JupiterLon1+= 568.0 * Math.cos ( 5.988670 + 625.670192 * t);
        JupiterLon1+= 474.0 * Math.cos ( 4.132453 + 412.371097 * t);
        JupiterLon1+= 413.0 * Math.cos ( 5.736529 + 95.979227 * t);
        JupiterLon1+= 345.0 * Math.cos ( 4.241596 + 632.783739 * t);
        JupiterLon1+= 336.0 * Math.cos ( 3.732487 + 1162.474704 * t);
        JupiterLon1+= 234.0 * Math.cos ( 4.034700 + 949.175609 * t);
        JupiterLon1+= 234.0 * Math.cos ( 6.243022 + 309.278323 * t);
        JupiterLon1+= 199.0 * Math.cos ( 1.504584 + 838.969288 * t);
        JupiterLon1+= 195.0 * Math.cos ( 2.218790 + 323.505417 * t);
        JupiterLon1+= 187.0 * Math.cos ( 6.086206 + 742.990061 * t);
        JupiterLon1+= 184.0 * Math.cos ( 6.279636 + 543.918059 * t);
        JupiterLon1+= 171.0 * Math.cos ( 5.416560 + 199.072001 * t);
        JupiterLon1+= 131.0 * Math.cos ( 0.626434 + 728.762967 * t);
        JupiterLon1+= 115.0 * Math.cos ( 0.680191 + 846.082835 * t);
        JupiterLon1+= 115.0 * Math.cos ( 5.286417 + 2118.763860 * t);
        JupiterLon1+= 108.0 * Math.cos ( 4.492828 + 956.289156 * t);
        JupiterLon1+= 80.0 * Math.cos ( 5.824124 + 1045.154836 * t);
        JupiterLon1+= 72.0 * Math.cos ( 5.341627 + 942.062062 * t);
        JupiterLon1+= 70.0 * Math.cos ( 5.972634 + 532.872359 * t);
        JupiterLon1+= 67.0 * Math.cos ( 5.733651 + 21.340641 * t);
        JupiterLon1+= 66.0 * Math.cos ( 0.129242 + 526.509571 * t);
        JupiterLon1+= 65.0 * Math.cos ( 6.088035 + 1581.959348 * t);
        JupiterLon1+= 59.0 * Math.cos ( 0.586270 + 1155.361157 * t);
        JupiterLon1+= 58.0 * Math.cos ( 0.994531 + 1596.186442 * t);
        JupiterLon1+= 57.0 * Math.cos ( 5.968513 + 1169.588251 * t);
        JupiterLon1+= 57.0 * Math.cos ( 1.411984 + 533.623118 * t);
        JupiterLon1+= 55.0 * Math.cos ( 5.428064 + 10.294941 * t);
        JupiterLon1+= 52.0 * Math.cos ( 5.726614 + 117.319868 * t);
        JupiterLon1+= 52.0 * Math.cos ( 0.229813 + 1368.660253 * t);
        JupiterLon1+= 50.0 * Math.cos ( 6.080751 + 525.758812 * t);
        JupiterLon1+= 47.0 * Math.cos ( 3.626118 + 1478.866574 * t);
        JupiterLon1+= 47.0 * Math.cos ( 0.511441 + 1265.567479 * t);
        JupiterLon1+= 40.0 * Math.cos ( 4.161580 + 1692.165670 * t);
        JupiterLon1+= 34.0 * Math.cos ( 0.099139 + 302.164776 * t);
        JupiterLon1+= 33.0 * Math.cos ( 5.035967 + 220.412642 * t);
        JupiterLon1+= 32.0 * Math.cos ( 5.374925 + 508.350324 * t);
        JupiterLon1+= 29.0 * Math.cos ( 5.422089 + 1272.681026 * t);
        JupiterLon1+= 29.0 * Math.cos ( 3.359272 + 4.665866 * t);
        JupiterLon1+= 29.0 * Math.cos ( 0.759079 + 88.865680 * t);
        JupiterLon1+= 25.0 * Math.cos ( 1.607231 + 831.855741 * t);

        JupiterLon2 = 0;
        JupiterLon2+= 47234.0 * Math.cos ( 4.321483 + 7.113547 * t);
        JupiterLon2+= 38966.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterLon2+= 30629.0 * Math.cos ( 2.930214 + 529.690965 * t);
        JupiterLon2+= 3189.0 * Math.cos ( 1.055046 + 522.577418 * t);
        JupiterLon2+= 2729.0 * Math.cos ( 4.845455 + 536.804512 * t);
        JupiterLon2+= 2723.0 * Math.cos ( 3.414115 + 1059.381930 * t);
        JupiterLon2+= 1721.0 * Math.cos ( 4.187344 + 14.227094 * t);
        JupiterLon2+= 383.0 * Math.cos ( 5.767907 + 419.484644 * t);
        JupiterLon2+= 378.0 * Math.cos ( 0.760490 + 515.463871 * t);
        JupiterLon2+= 367.0 * Math.cos ( 6.055091 + 103.092774 * t);
        JupiterLon2+= 337.0 * Math.cos ( 3.786444 + 3.181394 * t);
        JupiterLon2+= 308.0 * Math.cos ( 0.693567 + 206.185548 * t);
        JupiterLon2+= 218.0 * Math.cos ( 3.813892 + 1589.072895 * t);
        JupiterLon2+= 199.0 * Math.cos ( 5.339964 + 1066.495477 * t);
        JupiterLon2+= 197.0 * Math.cos ( 2.483564 + 3.932153 * t);
        JupiterLon2+= 156.0 * Math.cos ( 1.406424 + 1052.268383 * t);
        JupiterLon2+= 146.0 * Math.cos ( 3.813732 + 639.897286 * t);
        JupiterLon2+= 142.0 * Math.cos ( 1.634352 + 426.598191 * t);
        JupiterLon2+= 130.0 * Math.cos ( 5.837389 + 412.371097 * t);
        JupiterLon2+= 117.0 * Math.cos ( 1.414355 + 625.670192 * t);
        JupiterLon2+= 97.0 * Math.cos ( 4.033834 + 110.206321 * t);
        JupiterLon2+= 91.0 * Math.cos ( 1.106306 + 95.979227 * t);
        JupiterLon2+= 87.0 * Math.cos ( 2.522352 + 632.783739 * t);
        JupiterLon2+= 79.0 * Math.cos ( 4.637261 + 543.918059 * t);
        JupiterLon2+= 72.0 * Math.cos ( 2.217167 + 735.876514 * t);
        JupiterLon2+= 58.0 * Math.cos ( 0.832163 + 199.072001 * t);
        JupiterLon2+= 57.0 * Math.cos ( 3.122921 + 213.299095 * t);
        JupiterLon2+= 49.0 * Math.cos ( 1.672838 + 309.278323 * t);
        JupiterLon2+= 40.0 * Math.cos ( 4.024854 + 21.340641 * t);
        JupiterLon2+= 40.0 * Math.cos ( 0.624169 + 323.505417 * t);
        JupiterLon2+= 36.0 * Math.cos ( 2.325812 + 728.762967 * t);
        JupiterLon2+= 29.0 * Math.cos ( 3.608383 + 10.294941 * t);
        JupiterLon2+= 28.0 * Math.cos ( 3.239920 + 838.969288 * t);
        JupiterLon2+= 26.0 * Math.cos ( 4.501183 + 742.990061 * t);
        JupiterLon2+= 26.0 * Math.cos ( 2.512406 + 1162.474704 * t);
        JupiterLon2+= 25.0 * Math.cos ( 1.218681 + 1045.154836 * t);
        JupiterLon2+= 24.0 * Math.cos ( 3.005321 + 956.289156 * t);
        JupiterLon2+= 19.0 * Math.cos ( 4.290286 + 532.872359 * t);
        JupiterLon2+= 18.0 * Math.cos ( 0.809539 + 508.350324 * t);
        JupiterLon2+= 17.0 * Math.cos ( 4.200020 + 2118.763860 * t);
        JupiterLon2+= 17.0 * Math.cos ( 1.834021 + 526.509571 * t);
        JupiterLon2+= 15.0 * Math.cos ( 5.810380 + 1596.186442 * t);
        JupiterLon2+= 15.0 * Math.cos ( 0.681742 + 942.062062 * t);
        JupiterLon2+= 15.0 * Math.cos ( 3.999896 + 117.319868 * t);
        JupiterLon2+= 14.0 * Math.cos ( 5.951696 + 316.391870 * t);
        JupiterLon2+= 14.0 * Math.cos ( 1.803367 + 302.164776 * t);
        JupiterLon2+= 13.0 * Math.cos ( 2.518566 + 88.865680 * t);
        JupiterLon2+= 13.0 * Math.cos ( 4.368562 + 1169.588251 * t);
        JupiterLon2+= 11.0 * Math.cos ( 4.435866 + 525.758812 * t);
        JupiterLon2+= 10.0 * Math.cos ( 1.715632 + 1581.959348 * t);
        JupiterLon2+= 9.0 * Math.cos ( 2.176846 + 1155.361157 * t);
        JupiterLon2+= 9.0 * Math.cos ( 3.294528 + 220.412642 * t);
        JupiterLon2+= 9.0 * Math.cos ( 3.319245 + 831.855741 * t);
        JupiterLon2+= 8.0 * Math.cos ( 5.756722 + 846.082835 * t);
        JupiterLon2+= 8.0 * Math.cos ( 2.709555 + 533.623118 * t);
        JupiterLon2+= 7.0 * Math.cos ( 2.175601 + 1265.567479 * t);
        JupiterLon2+= 6.0 * Math.cos ( 0.499399 + 949.175609 * t);

        JupiterLon3 = 0;
        JupiterLon3+= 6502.0 * Math.cos ( 2.598629 + 7.113547 * t);
        JupiterLon3+= 1357.0 * Math.cos ( 1.346359 + 529.690965 * t);
        JupiterLon3+= 471.0 * Math.cos ( 2.475040 + 14.227094 * t);
        JupiterLon3+= 417.0 * Math.cos ( 3.244512 + 536.804512 * t);
        JupiterLon3+= 353.0 * Math.cos ( 2.973602 + 522.577418 * t);
        JupiterLon3+= 155.0 * Math.cos ( 2.075656 + 1059.381930 * t);
        JupiterLon3+= 87.0 * Math.cos ( 2.514316 + 515.463871 * t);
        JupiterLon3+= 44.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterLon3+= 34.0 * Math.cos ( 3.826338 + 1066.495477 * t);
        JupiterLon3+= 28.0 * Math.cos ( 2.447548 + 206.185548 * t);
        JupiterLon3+= 24.0 * Math.cos ( 1.276672 + 412.371097 * t);
        JupiterLon3+= 23.0 * Math.cos ( 2.982313 + 543.918059 * t);
        JupiterLon3+= 20.0 * Math.cos ( 2.100999 + 639.897286 * t);
        JupiterLon3+= 20.0 * Math.cos ( 1.402559 + 419.484644 * t);
        JupiterLon3+= 19.0 * Math.cos ( 1.593684 + 103.092774 * t);
        JupiterLon3+= 17.0 * Math.cos ( 2.302147 + 21.340641 * t);
        JupiterLon3+= 17.0 * Math.cos ( 2.598215 + 1589.072895 * t);
        JupiterLon3+= 16.0 * Math.cos ( 3.145211 + 625.670192 * t);
        JupiterLon3+= 16.0 * Math.cos ( 3.360301 + 1052.268383 * t);
        JupiterLon3+= 13.0 * Math.cos ( 2.759739 + 95.979227 * t);
        JupiterLon3+= 13.0 * Math.cos ( 2.538622 + 199.072001 * t);
        JupiterLon3+= 13.0 * Math.cos ( 6.265781 + 426.598191 * t);
        JupiterLon3+= 9.0 * Math.cos ( 1.763350 + 10.294941 * t);
        JupiterLon3+= 9.0 * Math.cos ( 2.265633 + 110.206321 * t);
        JupiterLon3+= 7.0 * Math.cos ( 3.425664 + 309.278323 * t);
        JupiterLon3+= 7.0 * Math.cos ( 4.038696 + 728.762967 * t);
        JupiterLon3+= 6.0 * Math.cos ( 2.520964 + 508.350324 * t);
        JupiterLon3+= 5.0 * Math.cos ( 2.911847 + 1045.154836 * t);
        JupiterLon3+= 5.0 * Math.cos ( 5.251962 + 323.505417 * t);
        JupiterLon3+= 4.0 * Math.cos ( 4.302903 + 88.865680 * t);
        JupiterLon3+= 4.0 * Math.cos ( 3.523814 + 302.164776 * t);
        JupiterLon3+= 4.0 * Math.cos ( 4.091253 + 735.876514 * t);
        JupiterLon3+= 3.0 * Math.cos ( 1.431760 + 956.289156 * t);
        JupiterLon3+= 3.0 * Math.cos ( 4.358175 + 1596.186442 * t);
        JupiterLon3+= 3.0 * Math.cos ( 1.252766 + 213.299095 * t);
        JupiterLon3+= 3.0 * Math.cos ( 5.015058 + 838.969288 * t);
        JupiterLon3+= 3.0 * Math.cos ( 2.237857 + 117.319868 * t);
        JupiterLon3+= 2.0 * Math.cos ( 2.896624 + 742.990061 * t);
        JupiterLon3+= 2.0 * Math.cos ( 2.355819 + 942.062062 * t);

        JupiterLon4 = 0;
        JupiterLon4+= 669.0 * Math.cos ( 0.852824 + 7.113547 * t);
        JupiterLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);
        JupiterLon4+= 100.0 * Math.cos ( 0.742589 + 14.227094 * t);
        JupiterLon4+= 50.0 * Math.cos ( 1.653462 + 536.804512 * t);
        JupiterLon4+= 44.0 * Math.cos ( 5.820264 + 529.690965 * t);
        JupiterLon4+= 32.0 * Math.cos ( 4.858300 + 522.577418 * t);
        JupiterLon4+= 15.0 * Math.cos ( 4.290616 + 515.463871 * t);
        JupiterLon4+= 9.0 * Math.cos ( 0.714785 + 1059.381930 * t);
        JupiterLon4+= 5.0 * Math.cos ( 1.295023 + 543.918059 * t);
        JupiterLon4+= 4.0 * Math.cos ( 2.317155 + 1066.495477 * t);
        JupiterLon4+= 4.0 * Math.cos ( 0.483268 + 21.340641 * t);
        JupiterLon4+= 3.0 * Math.cos ( 3.002455 + 412.371097 * t);
        JupiterLon4+= 2.0 * Math.cos ( 0.398589 + 639.897286 * t);
        JupiterLon4+= 2.0 * Math.cos ( 4.259256 + 199.072001 * t);
        JupiterLon4+= 2.0 * Math.cos ( 4.905362 + 625.670192 * t);
        JupiterLon4+= 2.0 * Math.cos ( 4.261476 + 206.185548 * t);
        JupiterLon4+= 1.0 * Math.cos ( 5.255470 + 1052.268383 * t);
        JupiterLon4+= 1.0 * Math.cos ( 4.716146 + 95.979227 * t);
        JupiterLon4+= 1.0 * Math.cos ( 1.286046 + 1589.072895 * t);

        JupiterLon5 = 0;
        JupiterLon5+= 50.0 * Math.cos ( 5.256590 + 7.113547 * t);
        JupiterLon5+= 16.0 * Math.cos ( 5.251268 + 14.227094 * t);
        JupiterLon5+= 4.0 * Math.cos ( 0.014619 + 536.804512 * t);
        JupiterLon5+= 2.0 * Math.cos ( 1.097399 + 522.577418 * t);
        JupiterLon5+= 1.0 * Math.cos ( 3.141593 + 0.000000 * t);

        JupiterLon =
        + JupiterLon0 * t0
        + JupiterLon1 * t1
        + JupiterLon2 * t2
        + JupiterLon3 * t3
        + JupiterLon4 * t4
        + JupiterLon5 * t5;

        Lon_T = JupiterLon; 

        JupiterLat0 = 0;
        JupiterLat0+= 2268616.0 * Math.cos ( 3.558526 + 529.690965 * t);
        JupiterLat0+= 110090.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterLat0+= 109972.0 * Math.cos ( 3.908093 + 1059.381930 * t);
        JupiterLat0+= 8101.0 * Math.cos ( 3.605096 + 522.577418 * t);
        JupiterLat0+= 6438.0 * Math.cos ( 0.306271 + 536.804512 * t);
        JupiterLat0+= 6044.0 * Math.cos ( 4.258831 + 1589.072895 * t);
        JupiterLat0+= 1107.0 * Math.cos ( 2.985344 + 1162.474704 * t);
        JupiterLat0+= 944.0 * Math.cos ( 1.675223 + 426.598191 * t);
        JupiterLat0+= 942.0 * Math.cos ( 2.936191 + 1052.268383 * t);
        JupiterLat0+= 894.0 * Math.cos ( 1.754474 + 7.113547 * t);
        JupiterLat0+= 836.0 * Math.cos ( 5.178820 + 103.092774 * t);
        JupiterLat0+= 767.0 * Math.cos ( 2.154736 + 632.783739 * t);
        JupiterLat0+= 684.0 * Math.cos ( 3.678088 + 213.299095 * t);
        JupiterLat0+= 629.0 * Math.cos ( 0.643433 + 1066.495477 * t);
        JupiterLat0+= 559.0 * Math.cos ( 0.013548 + 846.082835 * t);
        JupiterLat0+= 532.0 * Math.cos ( 2.703060 + 110.206321 * t);
        JupiterLat0+= 464.0 * Math.cos ( 1.173372 + 949.175609 * t);
        JupiterLat0+= 431.0 * Math.cos ( 2.608250 + 419.484644 * t);
        JupiterLat0+= 351.0 * Math.cos ( 4.610630 + 2118.763860 * t);
        JupiterLat0+= 132.0 * Math.cos ( 4.778170 + 742.990061 * t);
        JupiterLat0+= 123.0 * Math.cos ( 3.349682 + 1692.165670 * t);
        JupiterLat0+= 116.0 * Math.cos ( 1.386882 + 323.505417 * t);
        JupiterLat0+= 115.0 * Math.cos ( 5.048923 + 316.391870 * t);
        JupiterLat0+= 104.0 * Math.cos ( 3.701038 + 515.463871 * t);
        JupiterLat0+= 103.0 * Math.cos ( 2.318790 + 1478.866574 * t);
        JupiterLat0+= 102.0 * Math.cos ( 3.152938 + 1581.959348 * t);

        JupiterLat1 = 0;
        JupiterLat1+= 177352.0 * Math.cos ( 5.701665 + 529.690965 * t);
        JupiterLat1+= 3230.0 * Math.cos ( 5.779416 + 1059.381930 * t);
        JupiterLat1+= 3081.0 * Math.cos ( 5.474643 + 522.577418 * t);
        JupiterLat1+= 2212.0 * Math.cos ( 4.734775 + 536.804512 * t);
        JupiterLat1+= 1694.0 * Math.cos ( 3.141593 + 0.000000 * t);
        JupiterLat1+= 346.0 * Math.cos ( 4.745952 + 1052.268383 * t);
        JupiterLat1+= 234.0 * Math.cos ( 5.188561 + 1066.495477 * t);
        JupiterLat1+= 196.0 * Math.cos ( 6.185543 + 7.113547 * t);
        JupiterLat1+= 150.0 * Math.cos ( 3.927212 + 1589.072895 * t);
        JupiterLat1+= 114.0 * Math.cos ( 3.438973 + 632.783739 * t);
        JupiterLat1+= 97.0 * Math.cos ( 2.914263 + 949.175609 * t);
        JupiterLat1+= 82.0 * Math.cos ( 5.076661 + 1162.474704 * t);
        JupiterLat1+= 77.0 * Math.cos ( 2.505222 + 103.092774 * t);
        JupiterLat1+= 77.0 * Math.cos ( 0.612890 + 419.484644 * t);
        JupiterLat1+= 74.0 * Math.cos ( 5.499583 + 515.463871 * t);
        JupiterLat1+= 61.0 * Math.cos ( 5.447401 + 213.299095 * t);
        JupiterLat1+= 50.0 * Math.cos ( 3.947996 + 735.876514 * t);
        JupiterLat1+= 46.0 * Math.cos ( 0.538504 + 110.206321 * t);
        JupiterLat1+= 45.0 * Math.cos ( 1.895166 + 846.082835 * t);
        JupiterLat1+= 37.0 * Math.cos ( 4.698284 + 543.918059 * t);
        JupiterLat1+= 36.0 * Math.cos ( 6.109526 + 316.391870 * t);
        JupiterLat1+= 32.0 * Math.cos ( 4.924527 + 1581.959348 * t);

        JupiterLat2 = 0;
        JupiterLat2+= 8094.0 * Math.cos ( 1.463228 + 529.690965 * t);
        JupiterLat2+= 813.0 * Math.cos ( 3.141593 + 0.000000 * t);
        JupiterLat2+= 742.0 * Math.cos ( 0.956916 + 522.577418 * t);
        JupiterLat2+= 399.0 * Math.cos ( 2.898887 + 536.804512 * t);
        JupiterLat2+= 342.0 * Math.cos ( 1.446838 + 1059.381930 * t);
        JupiterLat2+= 74.0 * Math.cos ( 0.407247 + 1052.268383 * t);
        JupiterLat2+= 46.0 * Math.cos ( 3.480369 + 1066.495477 * t);
        JupiterLat2+= 30.0 * Math.cos ( 1.925042 + 1589.072895 * t);
        JupiterLat2+= 29.0 * Math.cos ( 0.990888 + 515.463871 * t);
        JupiterLat2+= 23.0 * Math.cos ( 4.271241 + 7.113547 * t);
        JupiterLat2+= 14.0 * Math.cos ( 2.922424 + 543.918059 * t);
        JupiterLat2+= 12.0 * Math.cos ( 5.221689 + 632.783739 * t);
        JupiterLat2+= 11.0 * Math.cos ( 4.880242 + 949.175609 * t);
        JupiterLat2+= 6.0 * Math.cos ( 6.210891 + 1045.154836 * t);

        JupiterLat3 = 0;
        JupiterLat3+= 252.0 * Math.cos ( 3.380879 + 529.690965 * t);
        JupiterLat3+= 122.0 * Math.cos ( 2.733118 + 522.577418 * t);
        JupiterLat3+= 49.0 * Math.cos ( 1.036900 + 536.804512 * t);
        JupiterLat3+= 11.0 * Math.cos ( 2.314636 + 1052.268383 * t);
        JupiterLat3+= 8.0 * Math.cos ( 2.767298 + 515.463871 * t);
        JupiterLat3+= 7.0 * Math.cos ( 4.252683 + 1059.381930 * t);
        JupiterLat3+= 6.0 * Math.cos ( 1.781158 + 1066.495477 * t);
        JupiterLat3+= 4.0 * Math.cos ( 1.130289 + 543.918059 * t);
        JupiterLat3+= 3.0 * Math.cos ( 3.141593 + 0.000000 * t);

        JupiterLat4 = 0;
        JupiterLat4+= 15.0 * Math.cos ( 4.529570 + 522.577418 * t);
        JupiterLat4+= 5.0 * Math.cos ( 4.474272 + 529.690965 * t);
        JupiterLat4+= 4.0 * Math.cos ( 5.439086 + 536.804512 * t);
        JupiterLat4+= 3.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterLat4+= 2.0 * Math.cos ( 4.518070 + 515.463871 * t);
        JupiterLat4+= 1.0 * Math.cos ( 4.201176 + 1052.268383 * t);

        JupiterLat5 = 0;
        JupiterLat5+= 1.0 * Math.cos ( 0.091986 + 522.577418 * t);

        JupiterLat =
        + JupiterLat0 * t0
        + JupiterLat1 * t1
        + JupiterLat2 * t2
        + JupiterLat3 * t3
        + JupiterLat4 * t4
        + JupiterLat5 * t5;

        Lat_T = JupiterLat; 

        JupiterRad0 = 0;
        JupiterRad0+= 520887429.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterRad0+= 25209327.0 * Math.cos ( 3.491086 + 529.690965 * t);
        JupiterRad0+= 610600.0 * Math.cos ( 3.841154 + 1059.381930 * t);
        JupiterRad0+= 282029.0 * Math.cos ( 2.574199 + 632.783739 * t);
        JupiterRad0+= 187647.0 * Math.cos ( 2.075904 + 522.577418 * t);
        JupiterRad0+= 86793.0 * Math.cos ( 0.710011 + 419.484644 * t);
        JupiterRad0+= 72063.0 * Math.cos ( 0.214657 + 536.804512 * t);
        JupiterRad0+= 65517.0 * Math.cos ( 5.979959 + 316.391870 * t);
        JupiterRad0+= 30135.0 * Math.cos ( 2.161321 + 949.175609 * t);
        JupiterRad0+= 29135.0 * Math.cos ( 1.677592 + 103.092774 * t);
        JupiterRad0+= 23947.0 * Math.cos ( 0.274579 + 7.113547 * t);
        JupiterRad0+= 23453.0 * Math.cos ( 3.540231 + 735.876514 * t);
        JupiterRad0+= 22284.0 * Math.cos ( 4.193628 + 1589.072895 * t);
        JupiterRad0+= 13033.0 * Math.cos ( 2.960431 + 1162.474704 * t);
        JupiterRad0+= 12749.0 * Math.cos ( 2.715501 + 1052.268383 * t);
        JupiterRad0+= 9703.0 * Math.cos ( 1.906696 + 206.185548 * t);
        JupiterRad0+= 9161.0 * Math.cos ( 4.413526 + 213.299095 * t);
        JupiterRad0+= 7895.0 * Math.cos ( 2.479076 + 426.598191 * t);
        JupiterRad0+= 7058.0 * Math.cos ( 2.181848 + 1265.567479 * t);
        JupiterRad0+= 6138.0 * Math.cos ( 6.264175 + 846.082835 * t);
        JupiterRad0+= 5477.0 * Math.cos ( 5.657293 + 639.897286 * t);
        JupiterRad0+= 4170.0 * Math.cos ( 2.016050 + 515.463871 * t);
        JupiterRad0+= 4137.0 * Math.cos ( 2.722200 + 625.670192 * t);
        JupiterRad0+= 3503.0 * Math.cos ( 0.565313 + 1066.495477 * t);
        JupiterRad0+= 2617.0 * Math.cos ( 2.009940 + 1581.959348 * t);
        JupiterRad0+= 2500.0 * Math.cos ( 4.551821 + 838.969288 * t);
        JupiterRad0+= 2128.0 * Math.cos ( 6.127515 + 742.990061 * t);
        JupiterRad0+= 1912.0 * Math.cos ( 0.856219 + 412.371097 * t);
        JupiterRad0+= 1611.0 * Math.cos ( 3.088678 + 1368.660253 * t);
        JupiterRad0+= 1479.0 * Math.cos ( 2.680262 + 1478.866574 * t);
        JupiterRad0+= 1231.0 * Math.cos ( 1.890430 + 323.505417 * t);
        JupiterRad0+= 1217.0 * Math.cos ( 1.801716 + 110.206321 * t);
        JupiterRad0+= 1015.0 * Math.cos ( 1.386732 + 454.909367 * t);
        JupiterRad0+= 999.0 * Math.cos ( 2.872089 + 309.278323 * t);
        JupiterRad0+= 961.0 * Math.cos ( 4.548770 + 2118.763860 * t);
        JupiterRad0+= 886.0 * Math.cos ( 4.147859 + 533.623118 * t);
        JupiterRad0+= 821.0 * Math.cos ( 1.593425 + 1898.351218 * t);
        JupiterRad0+= 812.0 * Math.cos ( 5.940919 + 909.818733 * t);
        JupiterRad0+= 777.0 * Math.cos ( 3.676970 + 728.762967 * t);
        JupiterRad0+= 727.0 * Math.cos ( 3.988247 + 1155.361157 * t);
        JupiterRad0+= 655.0 * Math.cos ( 2.790656 + 1685.052123 * t);
        JupiterRad0+= 654.0 * Math.cos ( 3.381508 + 1692.165670 * t);
        JupiterRad0+= 621.0 * Math.cos ( 4.822843 + 956.289156 * t);
        JupiterRad0+= 615.0 * Math.cos ( 2.276249 + 942.062062 * t);
        JupiterRad0+= 562.0 * Math.cos ( 0.080960 + 543.918059 * t);
        JupiterRad0+= 542.0 * Math.cos ( 0.283603 + 525.758812 * t);

        JupiterRad1 = 0;
        JupiterRad1+= 1271802.0 * Math.cos ( 2.649375 + 529.690965 * t);
        JupiterRad1+= 61662.0 * Math.cos ( 3.000763 + 1059.381930 * t);
        JupiterRad1+= 53444.0 * Math.cos ( 3.897176 + 522.577418 * t);
        JupiterRad1+= 41390.0 * Math.cos ( 0.000000 + 0.000000 * t);
        JupiterRad1+= 31185.0 * Math.cos ( 4.882767 + 536.804512 * t);
        JupiterRad1+= 11847.0 * Math.cos ( 2.413296 + 419.484644 * t);
        JupiterRad1+= 9166.0 * Math.cos ( 4.759794 + 7.113547 * t);
        JupiterRad1+= 3404.0 * Math.cos ( 3.346885 + 1589.072895 * t);
        JupiterRad1+= 3203.0 * Math.cos ( 5.210833 + 735.876514 * t);
        JupiterRad1+= 3176.0 * Math.cos ( 2.792980 + 103.092774 * t);
        JupiterRad1+= 2806.0 * Math.cos ( 3.742237 + 515.463871 * t);
        JupiterRad1+= 2677.0 * Math.cos ( 4.330529 + 1052.268383 * t);
        JupiterRad1+= 2600.0 * Math.cos ( 3.634351 + 206.185548 * t);
        JupiterRad1+= 2412.0 * Math.cos ( 1.469473 + 426.598191 * t);
        JupiterRad1+= 2101.0 * Math.cos ( 3.927627 + 639.897286 * t);
        JupiterRad1+= 1646.0 * Math.cos ( 5.309535 + 1066.495477 * t);
        JupiterRad1+= 1641.0 * Math.cos ( 4.416287 + 625.670192 * t);
        JupiterRad1+= 1050.0 * Math.cos ( 3.161136 + 213.299095 * t);
        JupiterRad1+= 1025.0 * Math.cos ( 2.554326 + 412.371097 * t);
        JupiterRad1+= 806.0 * Math.cos ( 2.677508 + 632.783739 * t);
        JupiterRad1+= 741.0 * Math.cos ( 2.170946 + 1162.474704 * t);
        JupiterRad1+= 677.0 * Math.cos ( 6.249535 + 838.969288 * t);
        JupiterRad1+= 567.0 * Math.cos ( 4.576554 + 742.990061 * t);
        JupiterRad1+= 485.0 * Math.cos ( 2.468828 + 949.175609 * t);
        JupiterRad1+= 469.0 * Math.cos ( 4.709735 + 543.918059 * t);
        JupiterRad1+= 445.0 * Math.cos ( 0.402812 + 323.505417 * t);
        JupiterRad1+= 416.0 * Math.cos ( 5.368360 + 728.762967 * t);
        JupiterRad1+= 402.0 * Math.cos ( 4.605288 + 309.278323 * t);
        JupiterRad1+= 347.0 * Math.cos ( 4.681488 + 14.227094 * t);
        JupiterRad1+= 338.0 * Math.cos ( 3.167820 + 956.289156 * t);
        JupiterRad1+= 261.0 * Math.cos ( 5.342903 + 846.082835 * t);
        JupiterRad1+= 247.0 * Math.cos ( 3.923138 + 942.062062 * t);
        JupiterRad1+= 220.0 * Math.cos ( 4.842110 + 1368.660253 * t);
        JupiterRad1+= 203.0 * Math.cos ( 5.599954 + 1155.361157 * t);
        JupiterRad1+= 200.0 * Math.cos ( 4.438888 + 1045.154836 * t);
        JupiterRad1+= 197.0 * Math.cos ( 3.705515 + 2118.763860 * t);
        JupiterRad1+= 196.0 * Math.cos ( 3.758776 + 199.072001 * t);
        JupiterRad1+= 184.0 * Math.cos ( 4.265268 + 95.979227 * t);
        JupiterRad1+= 180.0 * Math.cos ( 4.401655 + 532.872359 * t);
        JupiterRad1+= 170.0 * Math.cos ( 4.846475 + 526.509571 * t);
        JupiterRad1+= 146.0 * Math.cos ( 6.129584 + 533.623118 * t);
        JupiterRad1+= 133.0 * Math.cos ( 1.322457 + 110.206321 * t);
        JupiterRad1+= 132.0 * Math.cos ( 4.511880 + 525.758812 * t);

        JupiterRad2 = 0;
        JupiterRad2+= 79645.0 * Math.cos ( 1.358659 + 529.690965 * t);
        JupiterRad2+= 8252.0 * Math.cos ( 5.777739 + 522.577418 * t);
        JupiterRad2+= 7030.0 * Math.cos ( 3.274770 + 536.804512 * t);
        JupiterRad2+= 5314.0 * Math.cos ( 1.838351 + 1059.381930 * t);
        JupiterRad2+= 1861.0 * Math.cos ( 2.976821 + 7.113547 * t);
        JupiterRad2+= 964.0 * Math.cos ( 5.480318 + 515.463871 * t);
        JupiterRad2+= 836.0 * Math.cos ( 4.198899 + 419.484644 * t);
        JupiterRad2+= 498.0 * Math.cos ( 3.141593 + 0.000000 * t);
        JupiterRad2+= 427.0 * Math.cos ( 2.227531 + 639.897286 * t);
        JupiterRad2+= 406.0 * Math.cos ( 3.782507 + 1066.495477 * t);
        JupiterRad2+= 377.0 * Math.cos ( 2.242484 + 1589.072895 * t);
        JupiterRad2+= 363.0 * Math.cos ( 5.367618 + 206.185548 * t);
        JupiterRad2+= 342.0 * Math.cos ( 6.099230 + 1052.268383 * t);
        JupiterRad2+= 339.0 * Math.cos ( 6.126909 + 625.670192 * t);
        JupiterRad2+= 333.0 * Math.cos ( 0.003290 + 426.598191 * t);
        JupiterRad2+= 280.0 * Math.cos ( 4.261626 + 412.371097 * t);
        JupiterRad2+= 257.0 * Math.cos ( 0.962954 + 632.783739 * t);
        JupiterRad2+= 230.0 * Math.cos ( 0.705308 + 735.876514 * t);
        JupiterRad2+= 201.0 * Math.cos ( 3.068506 + 543.918059 * t);
        JupiterRad2+= 200.0 * Math.cos ( 4.428842 + 103.092774 * t);
        JupiterRad2+= 139.0 * Math.cos ( 2.932357 + 14.227094 * t);
        JupiterRad2+= 114.0 * Math.cos ( 0.787139 + 728.762967 * t);
        JupiterRad2+= 95.0 * Math.cos ( 1.704980 + 838.969288 * t);
        JupiterRad2+= 86.0 * Math.cos ( 5.144348 + 323.505417 * t);
        JupiterRad2+= 83.0 * Math.cos ( 0.058349 + 309.278323 * t);
        JupiterRad2+= 80.0 * Math.cos ( 2.981224 + 742.990061 * t);
        JupiterRad2+= 75.0 * Math.cos ( 1.604952 + 956.289156 * t);
        JupiterRad2+= 70.0 * Math.cos ( 1.509884 + 213.299095 * t);
        JupiterRad2+= 67.0 * Math.cos ( 5.473072 + 199.072001 * t);
        JupiterRad2+= 62.0 * Math.cos ( 6.101379 + 1045.154836 * t);
        JupiterRad2+= 56.0 * Math.cos ( 0.955348 + 1162.474704 * t);
        JupiterRad2+= 52.0 * Math.cos ( 5.584356 + 942.062062 * t);
        JupiterRad2+= 50.0 * Math.cos ( 2.720632 + 532.872359 * t);
        JupiterRad2+= 45.0 * Math.cos ( 5.524456 + 508.350324 * t);
        JupiterRad2+= 44.0 * Math.cos ( 0.271182 + 526.509571 * t);
        JupiterRad2+= 40.0 * Math.cos ( 5.945665 + 95.979227 * t);

        JupiterRad3 = 0;
        JupiterRad3+= 3519.0 * Math.cos ( 6.058006 + 529.690965 * t);
        JupiterRad3+= 1073.0 * Math.cos ( 1.673213 + 536.804512 * t);
        JupiterRad3+= 916.0 * Math.cos ( 1.413297 + 522.577418 * t);
        JupiterRad3+= 342.0 * Math.cos ( 0.522965 + 1059.381930 * t);
        JupiterRad3+= 255.0 * Math.cos ( 1.196255 + 7.113547 * t);
        JupiterRad3+= 222.0 * Math.cos ( 0.952252 + 515.463871 * t);
        JupiterRad3+= 90.0 * Math.cos ( 3.141593 + 0.000000 * t);
        JupiterRad3+= 69.0 * Math.cos ( 2.268853 + 1066.495477 * t);
        JupiterRad3+= 58.0 * Math.cos ( 1.413897 + 543.918059 * t);
        JupiterRad3+= 58.0 * Math.cos ( 0.525801 + 639.897286 * t);
        JupiterRad3+= 51.0 * Math.cos ( 5.980164 + 412.371097 * t);
        JupiterRad3+= 47.0 * Math.cos ( 1.578642 + 625.670192 * t);
        JupiterRad3+= 43.0 * Math.cos ( 6.116896 + 419.484644 * t);
        JupiterRad3+= 37.0 * Math.cos ( 1.182628 + 14.227094 * t);
        JupiterRad3+= 34.0 * Math.cos ( 1.666717 + 1052.268383 * t);
        JupiterRad3+= 34.0 * Math.cos ( 0.847850 + 206.185548 * t);
        JupiterRad3+= 31.0 * Math.cos ( 1.042902 + 1589.072895 * t);
        JupiterRad3+= 30.0 * Math.cos ( 4.632362 + 426.598191 * t);
        JupiterRad3+= 21.0 * Math.cos ( 2.500712 + 728.762967 * t);
        JupiterRad3+= 15.0 * Math.cos ( 0.891370 + 199.072001 * t);
        JupiterRad3+= 14.0 * Math.cos ( 0.960402 + 508.350324 * t);
        JupiterRad3+= 13.0 * Math.cos ( 1.502338 + 1045.154836 * t);
        JupiterRad3+= 12.0 * Math.cos ( 2.609526 + 735.876514 * t);
        JupiterRad3+= 12.0 * Math.cos ( 3.555135 + 323.505417 * t);
        JupiterRad3+= 11.0 * Math.cos ( 1.790414 + 309.278323 * t);
        JupiterRad3+= 11.0 * Math.cos ( 6.278451 + 956.289156 * t);
        JupiterRad3+= 10.0 * Math.cos ( 6.260169 + 103.092774 * t);
        JupiterRad3+= 9.0 * Math.cos ( 3.451268 + 838.969288 * t);

        JupiterRad4 = 0;
        JupiterRad4+= 129.0 * Math.cos ( 0.084193 + 536.804512 * t);
        JupiterRad4+= 113.0 * Math.cos ( 4.248589 + 529.690965 * t);
        JupiterRad4+= 83.0 * Math.cos ( 3.297549 + 522.577418 * t);
        JupiterRad4+= 38.0 * Math.cos ( 2.733266 + 515.463871 * t);
        JupiterRad4+= 27.0 * Math.cos ( 5.691426 + 7.113547 * t);
        JupiterRad4+= 18.0 * Math.cos ( 5.400125 + 1059.381930 * t);
        JupiterRad4+= 13.0 * Math.cos ( 6.015604 + 543.918059 * t);
        JupiterRad4+= 9.0 * Math.cos ( 0.768139 + 1066.495477 * t);
        JupiterRad4+= 8.0 * Math.cos ( 5.682281 + 14.227094 * t);
        JupiterRad4+= 7.0 * Math.cos ( 1.427513 + 412.371097 * t);
        JupiterRad4+= 6.0 * Math.cos ( 5.122869 + 639.897286 * t);
        JupiterRad4+= 5.0 * Math.cos ( 3.335019 + 625.670192 * t);
        JupiterRad4+= 3.0 * Math.cos ( 3.403348 + 1052.268383 * t);
        JupiterRad4+= 3.0 * Math.cos ( 4.160904 + 728.762967 * t);
        JupiterRad4+= 3.0 * Math.cos ( 2.898020 + 426.598191 * t);

        JupiterRad5 = 0;
        JupiterRad5+= 11.0 * Math.cos ( 4.752494 + 536.804512 * t);
        JupiterRad5+= 4.0 * Math.cos ( 5.915162 + 522.577418 * t);
        JupiterRad5+= 2.0 * Math.cos ( 5.567816 + 515.463871 * t);
        JupiterRad5+= 2.0 * Math.cos ( 4.296596 + 543.918059 * t);
        JupiterRad5+= 2.0 * Math.cos ( 3.693575 + 7.113547 * t);
        JupiterRad5+= 2.0 * Math.cos ( 4.132228 + 1059.381930 * t);
        JupiterRad5+= 2.0 * Math.cos ( 5.493128 + 1066.495477 * t);

        JupiterRad =
        + JupiterRad0 * t0
        + JupiterRad1 * t1
        + JupiterRad2 * t2
        + JupiterRad3 * t3
        + JupiterRad4 * t4
        + JupiterRad5 * t5;

        Rad_T = JupiterRad; 
    }


    //Saturn
    if (id00==7) {
        SaturnLon0 = 0;
        SaturnLon0+= 87401354.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnLon0+= 11107660.0 * Math.cos ( 3.962051 + 213.299095 * t);
        SaturnLon0+= 1414151.0 * Math.cos ( 4.585815 + 7.113547 * t);
        SaturnLon0+= 398379.0 * Math.cos ( 0.521120 + 206.185548 * t);
        SaturnLon0+= 350769.0 * Math.cos ( 3.303299 + 426.598191 * t);
        SaturnLon0+= 206816.0 * Math.cos ( 0.246584 + 103.092774 * t);
        SaturnLon0+= 79271.0 * Math.cos ( 3.840071 + 220.412642 * t);
        SaturnLon0+= 23990.0 * Math.cos ( 4.669769 + 110.206321 * t);
        SaturnLon0+= 16574.0 * Math.cos ( 0.437191 + 419.484644 * t);
        SaturnLon0+= 15820.0 * Math.cos ( 0.938090 + 632.783739 * t);
        SaturnLon0+= 15054.0 * Math.cos ( 2.716700 + 639.897286 * t);
        SaturnLon0+= 14907.0 * Math.cos ( 5.769033 + 316.391870 * t);
        SaturnLon0+= 14610.0 * Math.cos ( 1.565186 + 3.932153 * t);
        SaturnLon0+= 13160.0 * Math.cos ( 4.448912 + 14.227094 * t);
        SaturnLon0+= 13005.0 * Math.cos ( 5.981191 + 11.045700 * t);
        SaturnLon0+= 10725.0 * Math.cos ( 3.129396 + 202.253395 * t);
        SaturnLon0+= 6126.0 * Math.cos ( 1.763285 + 277.034994 * t);
        SaturnLon0+= 5863.0 * Math.cos ( 0.236570 + 529.690965 * t);
        SaturnLon0+= 5228.0 * Math.cos ( 4.207832 + 3.181394 * t);
        SaturnLon0+= 5020.0 * Math.cos ( 3.177879 + 433.711738 * t);
        SaturnLon0+= 4593.0 * Math.cos ( 0.619764 + 199.072001 * t);
        SaturnLon0+= 4006.0 * Math.cos ( 2.244799 + 63.735898 * t);
        SaturnLon0+= 3874.0 * Math.cos ( 3.222827 + 138.517497 * t);
        SaturnLon0+= 3269.0 * Math.cos ( 0.774919 + 949.175609 * t);
        SaturnLon0+= 2954.0 * Math.cos ( 0.982804 + 95.979227 * t);
        SaturnLon0+= 2461.0 * Math.cos ( 2.031636 + 735.876514 * t);
        SaturnLon0+= 1758.0 * Math.cos ( 3.265805 + 522.577418 * t);
        SaturnLon0+= 1640.0 * Math.cos ( 5.505050 + 846.082835 * t);
        SaturnLon0+= 1581.0 * Math.cos ( 4.372663 + 309.278323 * t);
        SaturnLon0+= 1391.0 * Math.cos ( 4.023320 + 323.505417 * t);
        SaturnLon0+= 1124.0 * Math.cos ( 2.837268 + 415.552491 * t);
        SaturnLon0+= 1087.0 * Math.cos ( 4.183432 + 2.447681 * t);
        SaturnLon0+= 1017.0 * Math.cos ( 3.716982 + 227.526189 * t);
        SaturnLon0+= 957.0 * Math.cos ( 0.507409 + 1265.567479 * t);
        SaturnLon0+= 853.0 * Math.cos ( 3.421414 + 175.166060 * t);
        SaturnLon0+= 849.0 * Math.cos ( 3.191498 + 209.366942 * t);
        SaturnLon0+= 789.0 * Math.cos ( 5.007451 + 0.963208 * t);
        SaturnLon0+= 749.0 * Math.cos ( 2.143981 + 853.196382 * t);
        SaturnLon0+= 744.0 * Math.cos ( 5.252770 + 224.344796 * t);
        SaturnLon0+= 687.0 * Math.cos ( 1.747144 + 1052.268383 * t);
        SaturnLon0+= 654.0 * Math.cos ( 1.598893 + 0.048184 * t);
        SaturnLon0+= 634.0 * Math.cos ( 2.298899 + 412.371097 * t);
        SaturnLon0+= 625.0 * Math.cos ( 0.970468 + 210.117702 * t);
        SaturnLon0+= 580.0 * Math.cos ( 3.092590 + 74.781599 * t);
        SaturnLon0+= 546.0 * Math.cos ( 2.126786 + 350.332120 * t);
        SaturnLon0+= 543.0 * Math.cos ( 1.518243 + 9.561228 * t);
        SaturnLon0+= 530.0 * Math.cos ( 4.449389 + 117.319868 * t);
        SaturnLon0+= 478.0 * Math.cos ( 2.964881 + 137.033024 * t);
        SaturnLon0+= 474.0 * Math.cos ( 5.475272 + 742.990061 * t);
        SaturnLon0+= 452.0 * Math.cos ( 1.044367 + 490.334089 * t);
        SaturnLon0+= 449.0 * Math.cos ( 1.289904 + 127.471797 * t);
        SaturnLon0+= 372.0 * Math.cos ( 2.278191 + 217.231249 * t);
        SaturnLon0+= 355.0 * Math.cos ( 3.012865 + 838.969288 * t);
        SaturnLon0+= 347.0 * Math.cos ( 1.539282 + 340.770892 * t);
        SaturnLon0+= 343.0 * Math.cos ( 0.246040 + 0.521265 * t);
        SaturnLon0+= 330.0 * Math.cos ( 0.247156 + 1581.959348 * t);
        SaturnLon0+= 322.0 * Math.cos ( 0.961375 + 203.737868 * t);
        SaturnLon0+= 322.0 * Math.cos ( 2.571824 + 647.010833 * t);
        SaturnLon0+= 309.0 * Math.cos ( 3.494867 + 216.480489 * t);
        SaturnLon0+= 287.0 * Math.cos ( 2.370437 + 351.816592 * t);
        SaturnLon0+= 278.0 * Math.cos ( 0.400204 + 211.814623 * t);
        SaturnLon0+= 249.0 * Math.cos ( 1.470105 + 1368.660253 * t);
        SaturnLon0+= 227.0 * Math.cos ( 4.910032 + 12.530173 * t);
        SaturnLon0+= 220.0 * Math.cos ( 4.204224 + 200.768922 * t);
        SaturnLon0+= 209.0 * Math.cos ( 1.345163 + 625.670192 * t);
        SaturnLon0+= 208.0 * Math.cos ( 0.483498 + 1162.474704 * t);
        SaturnLon0+= 208.0 * Math.cos ( 1.283022 + 39.356876 * t);
        SaturnLon0+= 205.0 * Math.cos ( 6.010822 + 265.989293 * t);
        SaturnLon0+= 185.0 * Math.cos ( 3.503444 + 149.563197 * t);
        SaturnLon0+= 184.0 * Math.cos ( 0.972550 + 4.192786 * t);
        SaturnLon0+= 182.0 * Math.cos ( 5.491223 + 2.920761 * t);
        SaturnLon0+= 174.0 * Math.cos ( 1.863058 + 0.750760 * t);
        SaturnLon0+= 165.0 * Math.cos ( 0.440055 + 5.416626 * t);
        SaturnLon0+= 149.0 * Math.cos ( 5.735944 + 52.690198 * t);
        SaturnLon0+= 148.0 * Math.cos ( 1.535293 + 5.629074 * t);
        SaturnLon0+= 146.0 * Math.cos ( 6.231025 + 195.139848 * t);
        SaturnLon0+= 140.0 * Math.cos ( 4.294503 + 21.340641 * t);
        SaturnLon0+= 131.0 * Math.cos ( 4.068290 + 10.294941 * t);
        SaturnLon0+= 125.0 * Math.cos ( 6.277378 + 1898.351218 * t);
        SaturnLon0+= 122.0 * Math.cos ( 1.975888 + 4.665866 * t);
        SaturnLon0+= 118.0 * Math.cos ( 5.340729 + 554.069987 * t);
        SaturnLon0+= 117.0 * Math.cos ( 2.679204 + 1155.361157 * t);
        SaturnLon0+= 114.0 * Math.cos ( 5.594275 + 1059.381930 * t);
        SaturnLon0+= 112.0 * Math.cos ( 1.105027 + 191.207695 * t);
        SaturnLon0+= 110.0 * Math.cos ( 0.166040 + 1.484473 * t);
        SaturnLon0+= 109.0 * Math.cos ( 3.438127 + 536.804512 * t);
        SaturnLon0+= 107.0 * Math.cos ( 4.011566 + 956.289156 * t);
        SaturnLon0+= 104.0 * Math.cos ( 2.192104 + 88.865680 * t);
        SaturnLon0+= 103.0 * Math.cos ( 1.197481 + 1685.052123 * t);
        SaturnLon0+= 101.0 * Math.cos ( 4.965137 + 269.921447 * t);

        SaturnLon1 = 0;
        SaturnLon1+= 21354295596.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnLon1+= 1296855.0 * Math.cos ( 1.828205 + 213.299095 * t);
        SaturnLon1+= 564348.0 * Math.cos ( 2.885001 + 7.113547 * t);
        SaturnLon1+= 107679.0 * Math.cos ( 2.277699 + 206.185548 * t);
        SaturnLon1+= 98323.0 * Math.cos ( 1.080701 + 426.598191 * t);
        SaturnLon1+= 40255.0 * Math.cos ( 2.041283 + 220.412642 * t);
        SaturnLon1+= 19942.0 * Math.cos ( 1.279547 + 103.092774 * t);
        SaturnLon1+= 10512.0 * Math.cos ( 2.748804 + 14.227094 * t);
        SaturnLon1+= 6939.0 * Math.cos ( 0.404931 + 639.897286 * t);
        SaturnLon1+= 4803.0 * Math.cos ( 2.441941 + 419.484644 * t);
        SaturnLon1+= 4056.0 * Math.cos ( 2.921666 + 110.206321 * t);
        SaturnLon1+= 3769.0 * Math.cos ( 3.649656 + 3.932153 * t);
        SaturnLon1+= 3385.0 * Math.cos ( 2.416943 + 3.181394 * t);
        SaturnLon1+= 3302.0 * Math.cos ( 1.262565 + 433.711738 * t);
        SaturnLon1+= 3071.0 * Math.cos ( 2.327393 + 199.072001 * t);
        SaturnLon1+= 1953.0 * Math.cos ( 3.563947 + 11.045700 * t);
        SaturnLon1+= 1249.0 * Math.cos ( 2.628037 + 95.979227 * t);
        SaturnLon1+= 922.0 * Math.cos ( 1.960898 + 227.526189 * t);
        SaturnLon1+= 706.0 * Math.cos ( 4.416892 + 529.690965 * t);
        SaturnLon1+= 650.0 * Math.cos ( 6.174181 + 202.253395 * t);
        SaturnLon1+= 628.0 * Math.cos ( 6.110882 + 309.278323 * t);
        SaturnLon1+= 487.0 * Math.cos ( 6.039982 + 853.196382 * t);
        SaturnLon1+= 479.0 * Math.cos ( 4.987770 + 522.577418 * t);
        SaturnLon1+= 468.0 * Math.cos ( 4.617078 + 63.735898 * t);
        SaturnLon1+= 417.0 * Math.cos ( 2.117082 + 323.505417 * t);
        SaturnLon1+= 408.0 * Math.cos ( 1.299496 + 209.366942 * t);
        SaturnLon1+= 352.0 * Math.cos ( 2.317071 + 632.783739 * t);
        SaturnLon1+= 344.0 * Math.cos ( 3.958542 + 412.371097 * t);
        SaturnLon1+= 340.0 * Math.cos ( 3.633964 + 316.391870 * t);
        SaturnLon1+= 336.0 * Math.cos ( 3.771731 + 735.876514 * t);
        SaturnLon1+= 332.0 * Math.cos ( 2.860777 + 210.117702 * t);
        SaturnLon1+= 289.0 * Math.cos ( 2.732631 + 117.319868 * t);
        SaturnLon1+= 281.0 * Math.cos ( 5.743988 + 2.447681 * t);
        SaturnLon1+= 266.0 * Math.cos ( 0.543446 + 647.010833 * t);
        SaturnLon1+= 230.0 * Math.cos ( 1.644289 + 216.480489 * t);
        SaturnLon1+= 192.0 * Math.cos ( 2.965129 + 224.344796 * t);
        SaturnLon1+= 173.0 * Math.cos ( 4.076952 + 846.082835 * t);
        SaturnLon1+= 167.0 * Math.cos ( 2.597452 + 21.340641 * t);
        SaturnLon1+= 136.0 * Math.cos ( 2.285802 + 10.294941 * t);
        SaturnLon1+= 131.0 * Math.cos ( 3.441084 + 742.990061 * t);
        SaturnLon1+= 128.0 * Math.cos ( 4.095335 + 217.231249 * t);
        SaturnLon1+= 109.0 * Math.cos ( 6.161411 + 415.552491 * t);
        SaturnLon1+= 98.0 * Math.cos ( 4.728454 + 838.969288 * t);
        SaturnLon1+= 94.0 * Math.cos ( 3.483973 + 1052.268383 * t);
        SaturnLon1+= 92.0 * Math.cos ( 3.947555 + 88.865680 * t);
        SaturnLon1+= 87.0 * Math.cos ( 1.219513 + 440.825285 * t);
        SaturnLon1+= 83.0 * Math.cos ( 3.112695 + 625.670192 * t);
        SaturnLon1+= 78.0 * Math.cos ( 6.244089 + 302.164776 * t);
        SaturnLon1+= 67.0 * Math.cos ( 0.289617 + 4.665866 * t);
        SaturnLon1+= 66.0 * Math.cos ( 5.647570 + 9.561228 * t);
        SaturnLon1+= 62.0 * Math.cos ( 4.293444 + 127.471797 * t);
        SaturnLon1+= 62.0 * Math.cos ( 1.827896 + 195.139848 * t);
        SaturnLon1+= 58.0 * Math.cos ( 2.476306 + 191.958454 * t);
        SaturnLon1+= 57.0 * Math.cos ( 5.018896 + 137.033024 * t);
        SaturnLon1+= 55.0 * Math.cos ( 0.283563 + 74.781599 * t);
        SaturnLon1+= 54.0 * Math.cos ( 5.126286 + 490.334089 * t);
        SaturnLon1+= 51.0 * Math.cos ( 1.457664 + 536.804512 * t);
        SaturnLon1+= 47.0 * Math.cos ( 1.177212 + 149.563197 * t);
        SaturnLon1+= 47.0 * Math.cos ( 5.148183 + 515.463871 * t);
        SaturnLon1+= 46.0 * Math.cos ( 2.231989 + 956.289156 * t);
        SaturnLon1+= 44.0 * Math.cos ( 2.708736 + 5.416626 * t);
        SaturnLon1+= 40.0 * Math.cos ( 0.412815 + 269.921447 * t);
        SaturnLon1+= 40.0 * Math.cos ( 3.888701 + 728.762967 * t);
        SaturnLon1+= 38.0 * Math.cos ( 0.646660 + 422.666038 * t);
        SaturnLon1+= 38.0 * Math.cos ( 2.533790 + 12.530173 * t);
        SaturnLon1+= 37.0 * Math.cos ( 3.782390 + 2.920761 * t);
        SaturnLon1+= 35.0 * Math.cos ( 6.084218 + 5.629074 * t);
        SaturnLon1+= 34.0 * Math.cos ( 3.210707 + 1368.660253 * t);
        SaturnLon1+= 33.0 * Math.cos ( 4.640631 + 277.034994 * t);
        SaturnLon1+= 33.0 * Math.cos ( 5.430381 + 1066.495477 * t);
        SaturnLon1+= 33.0 * Math.cos ( 0.300639 + 351.816592 * t);
        SaturnLon1+= 32.0 * Math.cos ( 4.386229 + 1155.361157 * t);
        SaturnLon1+= 31.0 * Math.cos ( 2.434559 + 52.690198 * t);
        SaturnLon1+= 30.0 * Math.cos ( 2.840670 + 203.004155 * t);
        SaturnLon1+= 30.0 * Math.cos ( 6.186846 + 284.148541 * t);
        SaturnLon1+= 30.0 * Math.cos ( 3.390526 + 1059.381930 * t);
        SaturnLon1+= 29.0 * Math.cos ( 2.026148 + 330.618964 * t);
        SaturnLon1+= 28.0 * Math.cos ( 2.741790 + 265.989293 * t);
        SaturnLon1+= 26.0 * Math.cos ( 4.512142 + 340.770892 * t);

        SaturnLon2 = 0;
        SaturnLon2+= 116441.0 * Math.cos ( 1.179879 + 7.113547 * t);
        SaturnLon2+= 91921.0 * Math.cos ( 0.074253 + 213.299095 * t);
        SaturnLon2+= 90592.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnLon2+= 15277.0 * Math.cos ( 4.064920 + 206.185548 * t);
        SaturnLon2+= 10631.0 * Math.cos ( 0.257783 + 220.412642 * t);
        SaturnLon2+= 10605.0 * Math.cos ( 5.409636 + 426.598191 * t);
        SaturnLon2+= 4265.0 * Math.cos ( 1.045956 + 14.227094 * t);
        SaturnLon2+= 1216.0 * Math.cos ( 2.918600 + 103.092774 * t);
        SaturnLon2+= 1165.0 * Math.cos ( 4.609421 + 639.897286 * t);
        SaturnLon2+= 1082.0 * Math.cos ( 5.691304 + 433.711738 * t);
        SaturnLon2+= 1045.0 * Math.cos ( 4.042065 + 199.072001 * t);
        SaturnLon2+= 1020.0 * Math.cos ( 0.633692 + 3.181394 * t);
        SaturnLon2+= 634.0 * Math.cos ( 4.388254 + 419.484644 * t);
        SaturnLon2+= 549.0 * Math.cos ( 5.573031 + 3.932153 * t);
        SaturnLon2+= 457.0 * Math.cos ( 1.268410 + 110.206321 * t);
        SaturnLon2+= 425.0 * Math.cos ( 0.209355 + 227.526189 * t);
        SaturnLon2+= 274.0 * Math.cos ( 4.288410 + 95.979227 * t);
        SaturnLon2+= 162.0 * Math.cos ( 1.381391 + 11.045700 * t);
        SaturnLon2+= 129.0 * Math.cos ( 1.565869 + 309.278323 * t);
        SaturnLon2+= 117.0 * Math.cos ( 3.881209 + 853.196382 * t);
        SaturnLon2+= 105.0 * Math.cos ( 4.900032 + 647.010833 * t);
        SaturnLon2+= 101.0 * Math.cos ( 0.892705 + 21.340641 * t);
        SaturnLon2+= 96.0 * Math.cos ( 2.910936 + 316.391870 * t);
        SaturnLon2+= 95.0 * Math.cos ( 5.625612 + 412.371097 * t);
        SaturnLon2+= 85.0 * Math.cos ( 5.734728 + 209.366942 * t);
        SaturnLon2+= 83.0 * Math.cos ( 6.050309 + 216.480489 * t);
        SaturnLon2+= 82.0 * Math.cos ( 1.024776 + 117.319868 * t);
        SaturnLon2+= 75.0 * Math.cos ( 4.761785 + 210.117702 * t);
        SaturnLon2+= 67.0 * Math.cos ( 0.456486 + 522.577418 * t);
        SaturnLon2+= 66.0 * Math.cos ( 0.482979 + 10.294941 * t);
        SaturnLon2+= 64.0 * Math.cos ( 0.351798 + 323.505417 * t);
        SaturnLon2+= 61.0 * Math.cos ( 4.875178 + 632.783739 * t);
        SaturnLon2+= 53.0 * Math.cos ( 2.747305 + 529.690965 * t);
        SaturnLon2+= 46.0 * Math.cos ( 5.692966 + 440.825285 * t);
        SaturnLon2+= 45.0 * Math.cos ( 1.668567 + 202.253395 * t);
        SaturnLon2+= 42.0 * Math.cos ( 5.707682 + 88.865680 * t);
        SaturnLon2+= 32.0 * Math.cos ( 0.070501 + 63.735898 * t);
        SaturnLon2+= 32.0 * Math.cos ( 1.671900 + 302.164776 * t);
        SaturnLon2+= 31.0 * Math.cos ( 4.163795 + 191.958454 * t);
        SaturnLon2+= 27.0 * Math.cos ( 0.832562 + 224.344796 * t);
        SaturnLon2+= 25.0 * Math.cos ( 5.655647 + 735.876514 * t);
        SaturnLon2+= 20.0 * Math.cos ( 5.943646 + 217.231249 * t);
        SaturnLon2+= 18.0 * Math.cos ( 4.900147 + 625.670192 * t);
        SaturnLon2+= 17.0 * Math.cos ( 1.625934 + 742.990061 * t);
        SaturnLon2+= 16.0 * Math.cos ( 0.578863 + 515.463871 * t);
        SaturnLon2+= 14.0 * Math.cos ( 0.206753 + 838.969288 * t);
        SaturnLon2+= 14.0 * Math.cos ( 3.764972 + 195.139848 * t);
        SaturnLon2+= 12.0 * Math.cos ( 4.717897 + 203.004155 * t);
        SaturnLon2+= 12.0 * Math.cos ( 0.126207 + 234.639736 * t);
        SaturnLon2+= 12.0 * Math.cos ( 3.120985 + 846.082835 * t);
        SaturnLon2+= 11.0 * Math.cos ( 5.922168 + 536.804512 * t);
        SaturnLon2+= 11.0 * Math.cos ( 5.602080 + 728.762967 * t);
        SaturnLon2+= 11.0 * Math.cos ( 3.203276 + 1066.495477 * t);
        SaturnLon2+= 10.0 * Math.cos ( 4.987367 + 422.666038 * t);
        SaturnLon2+= 10.0 * Math.cos ( 0.257094 + 330.618964 * t);
        SaturnLon2+= 10.0 * Math.cos ( 4.154720 + 860.309929 * t);
        SaturnLon2+= 9.0 * Math.cos ( 0.463800 + 956.289156 * t);
        SaturnLon2+= 8.0 * Math.cos ( 2.139904 + 269.921447 * t);
        SaturnLon2+= 8.0 * Math.cos ( 5.246027 + 429.779585 * t);
        SaturnLon2+= 8.0 * Math.cos ( 4.034012 + 9.561228 * t);
        SaturnLon2+= 7.0 * Math.cos ( 5.397247 + 1052.268383 * t);
        SaturnLon2+= 6.0 * Math.cos ( 4.462111 + 284.148541 * t);
        SaturnLon2+= 6.0 * Math.cos ( 5.934169 + 405.257550 * t);

        SaturnLon3 = 0;
        SaturnLon3+= 16039.0 * Math.cos ( 5.739454 + 7.113547 * t);
        SaturnLon3+= 4250.0 * Math.cos ( 4.585397 + 213.299095 * t);
        SaturnLon3+= 1907.0 * Math.cos ( 4.760821 + 220.412642 * t);
        SaturnLon3+= 1466.0 * Math.cos ( 5.913267 + 206.185548 * t);
        SaturnLon3+= 1162.0 * Math.cos ( 5.619731 + 14.227094 * t);
        SaturnLon3+= 1067.0 * Math.cos ( 3.608165 + 426.598191 * t);
        SaturnLon3+= 239.0 * Math.cos ( 3.860883 + 433.711738 * t);
        SaturnLon3+= 237.0 * Math.cos ( 5.768265 + 199.072001 * t);
        SaturnLon3+= 166.0 * Math.cos ( 5.116411 + 3.181394 * t);
        SaturnLon3+= 151.0 * Math.cos ( 2.735946 + 639.897286 * t);
        SaturnLon3+= 131.0 * Math.cos ( 4.743275 + 227.526189 * t);
        SaturnLon3+= 63.0 * Math.cos ( 0.228501 + 419.484644 * t);
        SaturnLon3+= 62.0 * Math.cos ( 4.742871 + 103.092774 * t);
        SaturnLon3+= 40.0 * Math.cos ( 5.472981 + 21.340641 * t);
        SaturnLon3+= 40.0 * Math.cos ( 5.964203 + 95.979227 * t);
        SaturnLon3+= 39.0 * Math.cos ( 5.833862 + 110.206321 * t);
        SaturnLon3+= 28.0 * Math.cos ( 3.012353 + 647.010833 * t);
        SaturnLon3+= 25.0 * Math.cos ( 0.988082 + 3.932153 * t);
        SaturnLon3+= 19.0 * Math.cos ( 1.916142 + 853.196382 * t);
        SaturnLon3+= 18.0 * Math.cos ( 4.967384 + 10.294941 * t);
        SaturnLon3+= 18.0 * Math.cos ( 1.025064 + 412.371097 * t);
        SaturnLon3+= 18.0 * Math.cos ( 4.203765 + 216.480489 * t);
        SaturnLon3+= 18.0 * Math.cos ( 3.319134 + 309.278323 * t);
        SaturnLon3+= 16.0 * Math.cos ( 3.898253 + 440.825285 * t);
        SaturnLon3+= 16.0 * Math.cos ( 5.616678 + 117.319868 * t);
        SaturnLon3+= 13.0 * Math.cos ( 1.180690 + 88.865680 * t);
        SaturnLon3+= 11.0 * Math.cos ( 5.575206 + 11.045700 * t);
        SaturnLon3+= 11.0 * Math.cos ( 5.929063 + 191.958454 * t);
        SaturnLon3+= 10.0 * Math.cos ( 3.948387 + 209.366942 * t);
        SaturnLon3+= 9.0 * Math.cos ( 3.393354 + 302.164776 * t);
        SaturnLon3+= 8.0 * Math.cos ( 4.877369 + 323.505417 * t);
        SaturnLon3+= 7.0 * Math.cos ( 0.381987 + 632.783739 * t);
        SaturnLon3+= 6.0 * Math.cos ( 2.254927 + 522.577418 * t);
        SaturnLon3+= 6.0 * Math.cos ( 1.056212 + 210.117702 * t);
        SaturnLon3+= 5.0 * Math.cos ( 4.642685 + 234.639736 * t);
        SaturnLon3+= 4.0 * Math.cos ( 3.141593 + 0.000000 * t);
        SaturnLon3+= 4.0 * Math.cos ( 2.306770 + 515.463871 * t);
        SaturnLon3+= 3.0 * Math.cos ( 2.203094 + 860.309929 * t);
        SaturnLon3+= 3.0 * Math.cos ( 0.586044 + 529.690965 * t);
        SaturnLon3+= 3.0 * Math.cos ( 4.934477 + 224.344796 * t);
        SaturnLon3+= 3.0 * Math.cos ( 0.423939 + 625.670192 * t);
        SaturnLon3+= 2.0 * Math.cos ( 4.766214 + 330.618964 * t);
        SaturnLon3+= 2.0 * Math.cos ( 3.348092 + 429.779585 * t);
        SaturnLon3+= 2.0 * Math.cos ( 3.198150 + 202.253395 * t);
        SaturnLon3+= 2.0 * Math.cos ( 1.189185 + 1066.495477 * t);
        SaturnLon3+= 2.0 * Math.cos ( 1.354882 + 405.257550 * t);
        SaturnLon3+= 2.0 * Math.cos ( 4.156314 + 223.594036 * t);
        SaturnLon3+= 2.0 * Math.cos ( 3.066936 + 654.124380 * t);

        SaturnLon4 = 0;
        SaturnLon4+= 1662.0 * Math.cos ( 3.998262 + 7.113547 * t);
        SaturnLon4+= 257.0 * Math.cos ( 2.984365 + 220.412642 * t);
        SaturnLon4+= 236.0 * Math.cos ( 3.902414 + 14.227094 * t);
        SaturnLon4+= 149.0 * Math.cos ( 2.741108 + 213.299095 * t);
        SaturnLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);
        SaturnLon4+= 110.0 * Math.cos ( 1.515157 + 206.185548 * t);
        SaturnLon4+= 68.0 * Math.cos ( 1.721210 + 426.598191 * t);
        SaturnLon4+= 40.0 * Math.cos ( 2.046449 + 433.711738 * t);
        SaturnLon4+= 38.0 * Math.cos ( 1.237955 + 199.072001 * t);
        SaturnLon4+= 31.0 * Math.cos ( 3.010942 + 227.526189 * t);
        SaturnLon4+= 15.0 * Math.cos ( 0.828971 + 639.897286 * t);
        SaturnLon4+= 9.0 * Math.cos ( 3.714853 + 21.340641 * t);
        SaturnLon4+= 6.0 * Math.cos ( 2.419953 + 419.484644 * t);
        SaturnLon4+= 6.0 * Math.cos ( 1.156071 + 647.010833 * t);
        SaturnLon4+= 4.0 * Math.cos ( 1.451208 + 95.979227 * t);
        SaturnLon4+= 4.0 * Math.cos ( 2.117832 + 440.825285 * t);
        SaturnLon4+= 3.0 * Math.cos ( 4.092781 + 110.206321 * t);
        SaturnLon4+= 3.0 * Math.cos ( 2.772032 + 412.371097 * t);
        SaturnLon4+= 3.0 * Math.cos ( 3.007303 + 88.865680 * t);
        SaturnLon4+= 3.0 * Math.cos ( 0.002557 + 853.196382 * t);
        SaturnLon4+= 3.0 * Math.cos ( 0.392469 + 103.092774 * t);
        SaturnLon4+= 2.0 * Math.cos ( 3.776892 + 117.319868 * t);
        SaturnLon4+= 2.0 * Math.cos ( 2.828843 + 234.639736 * t);
        SaturnLon4+= 2.0 * Math.cos ( 5.079555 + 309.278323 * t);
        SaturnLon4+= 2.0 * Math.cos ( 2.238160 + 216.480489 * t);
        SaturnLon4+= 2.0 * Math.cos ( 5.191769 + 302.164776 * t);
        SaturnLon4+= 1.0 * Math.cos ( 1.546852 + 191.958454 * t);

        SaturnLon5 = 0;
        SaturnLon5+= 124.0 * Math.cos ( 2.259233 + 7.113547 * t);
        SaturnLon5+= 34.0 * Math.cos ( 2.162507 + 14.227094 * t);
        SaturnLon5+= 28.0 * Math.cos ( 1.198682 + 220.412642 * t);
        SaturnLon5+= 6.0 * Math.cos ( 1.215843 + 227.526189 * t);
        SaturnLon5+= 5.0 * Math.cos ( 0.235504 + 433.711738 * t);
        SaturnLon5+= 4.0 * Math.cos ( 6.226697 + 426.598191 * t);
        SaturnLon5+= 3.0 * Math.cos ( 2.973720 + 199.072001 * t);
        SaturnLon5+= 3.0 * Math.cos ( 4.287109 + 206.185548 * t);
        SaturnLon5+= 2.0 * Math.cos ( 6.252654 + 213.299095 * t);
        SaturnLon5+= 1.0 * Math.cos ( 5.276126 + 639.897286 * t);
        SaturnLon5+= 1.0 * Math.cos ( 0.235170 + 440.825285 * t);
        SaturnLon5+= 1.0 * Math.cos ( 3.141593 + 0.000000 * t);

        SaturnLon =
        + SaturnLon0 * t0
        + SaturnLon1 * t1
        + SaturnLon2 * t2
        + SaturnLon3 * t3
        + SaturnLon4 * t4
        + SaturnLon5 * t5;

        Lon_T = SaturnLon; 

        SaturnLat0 = 0;
        SaturnLat0+= 4330678.0 * Math.cos ( 3.602844 + 213.299095 * t);
        SaturnLat0+= 240348.0 * Math.cos ( 2.852385 + 426.598191 * t);
        SaturnLat0+= 84746.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnLat0+= 34116.0 * Math.cos ( 0.572973 + 206.185548 * t);
        SaturnLat0+= 30863.0 * Math.cos ( 3.484415 + 220.412642 * t);
        SaturnLat0+= 14734.0 * Math.cos ( 2.118466 + 639.897286 * t);
        SaturnLat0+= 9917.0 * Math.cos ( 5.790032 + 419.484644 * t);
        SaturnLat0+= 6994.0 * Math.cos ( 4.736047 + 7.113547 * t);
        SaturnLat0+= 4808.0 * Math.cos ( 5.433053 + 316.391870 * t);
        SaturnLat0+= 4788.0 * Math.cos ( 4.965129 + 110.206321 * t);
        SaturnLat0+= 3432.0 * Math.cos ( 2.732558 + 433.711738 * t);
        SaturnLat0+= 1506.0 * Math.cos ( 6.013045 + 103.092774 * t);
        SaturnLat0+= 1060.0 * Math.cos ( 5.630993 + 529.690965 * t);
        SaturnLat0+= 969.0 * Math.cos ( 5.204350 + 632.783739 * t);
        SaturnLat0+= 942.0 * Math.cos ( 1.396467 + 853.196382 * t);
        SaturnLat0+= 708.0 * Math.cos ( 3.803023 + 323.505417 * t);
        SaturnLat0+= 552.0 * Math.cos ( 5.131491 + 202.253395 * t);
        SaturnLat0+= 400.0 * Math.cos ( 3.358914 + 227.526189 * t);
        SaturnLat0+= 319.0 * Math.cos ( 3.625716 + 209.366942 * t);
        SaturnLat0+= 316.0 * Math.cos ( 1.997168 + 647.010833 * t);
        SaturnLat0+= 314.0 * Math.cos ( 0.465103 + 217.231249 * t);
        SaturnLat0+= 284.0 * Math.cos ( 4.886485 + 224.344796 * t);
        SaturnLat0+= 236.0 * Math.cos ( 2.138875 + 11.045700 * t);
        SaturnLat0+= 215.0 * Math.cos ( 5.949826 + 846.082835 * t);
        SaturnLat0+= 209.0 * Math.cos ( 2.120039 + 415.552491 * t);
        SaturnLat0+= 207.0 * Math.cos ( 0.730215 + 199.072001 * t);
        SaturnLat0+= 179.0 * Math.cos ( 2.953615 + 63.735898 * t);
        SaturnLat0+= 141.0 * Math.cos ( 0.644176 + 490.334089 * t);
        SaturnLat0+= 139.0 * Math.cos ( 4.595352 + 14.227094 * t);
        SaturnLat0+= 139.0 * Math.cos ( 1.998220 + 735.876514 * t);
        SaturnLat0+= 135.0 * Math.cos ( 5.245008 + 742.990061 * t);
        SaturnLat0+= 122.0 * Math.cos ( 3.115371 + 522.577418 * t);
        SaturnLat0+= 116.0 * Math.cos ( 3.108915 + 216.480489 * t);
        SaturnLat0+= 114.0 * Math.cos ( 0.962614 + 210.117702 * t);

        SaturnLat1 = 0;
        SaturnLat1+= 397555.0 * Math.cos ( 5.332900 + 213.299095 * t);
        SaturnLat1+= 49479.0 * Math.cos ( 3.141593 + 0.000000 * t);
        SaturnLat1+= 18572.0 * Math.cos ( 6.099192 + 426.598191 * t);
        SaturnLat1+= 14801.0 * Math.cos ( 2.305861 + 206.185548 * t);
        SaturnLat1+= 9644.0 * Math.cos ( 1.696747 + 220.412642 * t);
        SaturnLat1+= 3757.0 * Math.cos ( 1.254295 + 419.484644 * t);
        SaturnLat1+= 2717.0 * Math.cos ( 5.911667 + 639.897286 * t);
        SaturnLat1+= 1455.0 * Math.cos ( 0.851616 + 433.711738 * t);
        SaturnLat1+= 1291.0 * Math.cos ( 2.917709 + 7.113547 * t);
        SaturnLat1+= 853.0 * Math.cos ( 0.435721 + 316.391870 * t);
        SaturnLat1+= 298.0 * Math.cos ( 0.919092 + 632.783739 * t);
        SaturnLat1+= 292.0 * Math.cos ( 5.315743 + 853.196382 * t);
        SaturnLat1+= 284.0 * Math.cos ( 1.618818 + 227.526189 * t);
        SaturnLat1+= 275.0 * Math.cos ( 3.888641 + 103.092774 * t);
        SaturnLat1+= 172.0 * Math.cos ( 0.052151 + 647.010833 * t);
        SaturnLat1+= 166.0 * Math.cos ( 2.443516 + 199.072001 * t);
        SaturnLat1+= 158.0 * Math.cos ( 5.208501 + 110.206321 * t);
        SaturnLat1+= 128.0 * Math.cos ( 1.207115 + 529.690965 * t);
        SaturnLat1+= 110.0 * Math.cos ( 2.456956 + 217.231249 * t);
        SaturnLat1+= 82.0 * Math.cos ( 2.758392 + 210.117702 * t);
        SaturnLat1+= 81.0 * Math.cos ( 2.860384 + 14.227094 * t);
        SaturnLat1+= 69.0 * Math.cos ( 1.655376 + 202.253395 * t);
        SaturnLat1+= 65.0 * Math.cos ( 1.255275 + 216.480489 * t);
        SaturnLat1+= 61.0 * Math.cos ( 1.252734 + 209.366942 * t);
        SaturnLat1+= 59.0 * Math.cos ( 1.824108 + 323.505417 * t);
        SaturnLat1+= 46.0 * Math.cos ( 0.815347 + 440.825285 * t);
        SaturnLat1+= 36.0 * Math.cos ( 1.818511 + 224.344796 * t);
        SaturnLat1+= 34.0 * Math.cos ( 2.839713 + 117.319868 * t);
        SaturnLat1+= 33.0 * Math.cos ( 1.305571 + 412.371097 * t);
        SaturnLat1+= 32.0 * Math.cos ( 1.186761 + 846.082835 * t);
        SaturnLat1+= 27.0 * Math.cos ( 4.647448 + 1066.495477 * t);
        SaturnLat1+= 27.0 * Math.cos ( 4.442287 + 11.045700 * t);

        SaturnLat2 = 0;
        SaturnLat2+= 20630.0 * Math.cos ( 0.504824 + 213.299095 * t);
        SaturnLat2+= 3720.0 * Math.cos ( 3.998335 + 206.185548 * t);
        SaturnLat2+= 1627.0 * Math.cos ( 6.181899 + 220.412642 * t);
        SaturnLat2+= 1346.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnLat2+= 706.0 * Math.cos ( 3.039143 + 419.484644 * t);
        SaturnLat2+= 365.0 * Math.cos ( 5.099287 + 426.598191 * t);
        SaturnLat2+= 330.0 * Math.cos ( 5.278992 + 433.711738 * t);
        SaturnLat2+= 219.0 * Math.cos ( 3.828415 + 639.897286 * t);
        SaturnLat2+= 139.0 * Math.cos ( 1.042726 + 7.113547 * t);
        SaturnLat2+= 104.0 * Math.cos ( 6.157310 + 227.526189 * t);
        SaturnLat2+= 93.0 * Math.cos ( 1.979944 + 316.391870 * t);
        SaturnLat2+= 71.0 * Math.cos ( 4.147544 + 199.072001 * t);
        SaturnLat2+= 52.0 * Math.cos ( 2.883648 + 632.783739 * t);
        SaturnLat2+= 49.0 * Math.cos ( 4.433902 + 647.010833 * t);
        SaturnLat2+= 41.0 * Math.cos ( 3.159278 + 853.196382 * t);
        SaturnLat2+= 29.0 * Math.cos ( 4.529783 + 210.117702 * t);
        SaturnLat2+= 24.0 * Math.cos ( 1.115959 + 14.227094 * t);
        SaturnLat2+= 21.0 * Math.cos ( 4.350958 + 217.231249 * t);
        SaturnLat2+= 20.0 * Math.cos ( 5.307797 + 440.825285 * t);
        SaturnLat2+= 18.0 * Math.cos ( 0.853915 + 110.206321 * t);
        SaturnLat2+= 17.0 * Math.cos ( 5.681121 + 216.480489 * t);
        SaturnLat2+= 16.0 * Math.cos ( 4.257672 + 103.092774 * t);
        SaturnLat2+= 14.0 * Math.cos ( 2.999043 + 412.371097 * t);
        SaturnLat2+= 12.0 * Math.cos ( 2.526799 + 529.690965 * t);
        SaturnLat2+= 8.0 * Math.cos ( 3.315124 + 202.253395 * t);
        SaturnLat2+= 7.0 * Math.cos ( 5.557141 + 209.366942 * t);
        SaturnLat2+= 7.0 * Math.cos ( 0.287660 + 323.505417 * t);
        SaturnLat2+= 6.0 * Math.cos ( 1.161213 + 117.319868 * t);
        SaturnLat2+= 6.0 * Math.cos ( 3.612319 + 860.309929 * t);

        SaturnLat3 = 0;
        SaturnLat3+= 666.0 * Math.cos ( 1.990063 + 213.299095 * t);
        SaturnLat3+= 632.0 * Math.cos ( 5.697783 + 206.185548 * t);
        SaturnLat3+= 398.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnLat3+= 188.0 * Math.cos ( 4.337798 + 220.412642 * t);
        SaturnLat3+= 92.0 * Math.cos ( 4.841042 + 419.484644 * t);
        SaturnLat3+= 52.0 * Math.cos ( 3.421495 + 433.711738 * t);
        SaturnLat3+= 42.0 * Math.cos ( 2.380732 + 426.598191 * t);
        SaturnLat3+= 26.0 * Math.cos ( 4.401672 + 227.526189 * t);
        SaturnLat3+= 21.0 * Math.cos ( 5.853135 + 199.072001 * t);
        SaturnLat3+= 18.0 * Math.cos ( 1.993214 + 639.897286 * t);
        SaturnLat3+= 11.0 * Math.cos ( 5.373445 + 7.113547 * t);
        SaturnLat3+= 10.0 * Math.cos ( 2.549018 + 647.010833 * t);
        SaturnLat3+= 7.0 * Math.cos ( 3.455184 + 316.391870 * t);
        SaturnLat3+= 6.0 * Math.cos ( 4.800552 + 632.783739 * t);
        SaturnLat3+= 6.0 * Math.cos ( 0.016804 + 210.117702 * t);
        SaturnLat3+= 6.0 * Math.cos ( 3.517567 + 440.825285 * t);
        SaturnLat3+= 5.0 * Math.cos ( 5.637197 + 14.227094 * t);
        SaturnLat3+= 5.0 * Math.cos ( 1.224244 + 853.196382 * t);
        SaturnLat3+= 4.0 * Math.cos ( 4.712994 + 412.371097 * t);
        SaturnLat3+= 3.0 * Math.cos ( 0.626792 + 103.092774 * t);
        SaturnLat3+= 2.0 * Math.cos ( 3.719823 + 216.480489 * t);

        SaturnLat4 = 0;
        SaturnLat4+= 80.0 * Math.cos ( 1.119184 + 206.185548 * t);
        SaturnLat4+= 32.0 * Math.cos ( 3.122187 + 213.299095 * t);
        SaturnLat4+= 17.0 * Math.cos ( 2.480732 + 220.412642 * t);
        SaturnLat4+= 12.0 * Math.cos ( 3.141593 + 0.000000 * t);
        SaturnLat4+= 9.0 * Math.cos ( 0.384414 + 419.484644 * t);
        SaturnLat4+= 6.0 * Math.cos ( 1.561864 + 433.711738 * t);
        SaturnLat4+= 5.0 * Math.cos ( 2.634983 + 227.526189 * t);
        SaturnLat4+= 5.0 * Math.cos ( 1.282356 + 199.072001 * t);
        SaturnLat4+= 1.0 * Math.cos ( 1.430967 + 426.598191 * t);
        SaturnLat4+= 1.0 * Math.cos ( 0.669881 + 647.010833 * t);
        SaturnLat4+= 1.0 * Math.cos ( 1.720419 + 440.825285 * t);
        SaturnLat4+= 1.0 * Math.cos ( 6.180923 + 639.897286 * t);

        SaturnLat5 = 0;
        SaturnLat5+= 8.0 * Math.cos ( 2.819276 + 206.185548 * t);
        SaturnLat5+= 1.0 * Math.cos ( 0.511872 + 220.412642 * t);

        SaturnLat =
        + SaturnLat0 * t0
        + SaturnLat1 * t1
        + SaturnLat2 * t2
        + SaturnLat3 * t3
        + SaturnLat4 * t4
        + SaturnLat5 * t5;

        Lat_T = SaturnLat; 

        SaturnRad0 = 0;
        SaturnRad0+= 955758136.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnRad0+= 52921382.0 * Math.cos ( 2.392262 + 213.299095 * t);
        SaturnRad0+= 1873680.0 * Math.cos ( 5.235496 + 206.185548 * t);
        SaturnRad0+= 1464664.0 * Math.cos ( 1.647630 + 426.598191 * t);
        SaturnRad0+= 821891.0 * Math.cos ( 5.935200 + 316.391870 * t);
        SaturnRad0+= 547507.0 * Math.cos ( 5.015326 + 103.092774 * t);
        SaturnRad0+= 371684.0 * Math.cos ( 2.271148 + 220.412642 * t);
        SaturnRad0+= 361778.0 * Math.cos ( 3.139043 + 7.113547 * t);
        SaturnRad0+= 140618.0 * Math.cos ( 5.704067 + 632.783739 * t);
        SaturnRad0+= 108975.0 * Math.cos ( 3.293136 + 110.206321 * t);
        SaturnRad0+= 69007.0 * Math.cos ( 5.940996 + 419.484644 * t);
        SaturnRad0+= 61053.0 * Math.cos ( 0.940378 + 639.897286 * t);
        SaturnRad0+= 48913.0 * Math.cos ( 1.557334 + 202.253395 * t);
        SaturnRad0+= 34144.0 * Math.cos ( 0.195186 + 277.034994 * t);
        SaturnRad0+= 32402.0 * Math.cos ( 5.470846 + 949.175609 * t);
        SaturnRad0+= 20937.0 * Math.cos ( 0.463492 + 735.876514 * t);
        SaturnRad0+= 20839.0 * Math.cos ( 1.521026 + 433.711738 * t);
        SaturnRad0+= 20747.0 * Math.cos ( 5.332557 + 199.072001 * t);
        SaturnRad0+= 15298.0 * Math.cos ( 3.059437 + 529.690965 * t);
        SaturnRad0+= 14296.0 * Math.cos ( 2.604335 + 323.505417 * t);
        SaturnRad0+= 12884.0 * Math.cos ( 1.648923 + 138.517497 * t);
        SaturnRad0+= 11993.0 * Math.cos ( 5.980514 + 846.082835 * t);
        SaturnRad0+= 11380.0 * Math.cos ( 1.731057 + 522.577418 * t);
        SaturnRad0+= 9796.0 * Math.cos ( 5.204759 + 1265.567479 * t);
        SaturnRad0+= 7753.0 * Math.cos ( 5.851913 + 95.979227 * t);
        SaturnRad0+= 6771.0 * Math.cos ( 3.004335 + 14.227094 * t);
        SaturnRad0+= 6466.0 * Math.cos ( 0.177332 + 1052.268383 * t);
        SaturnRad0+= 5850.0 * Math.cos ( 1.455196 + 415.552491 * t);
        SaturnRad0+= 5307.0 * Math.cos ( 0.597375 + 63.735898 * t);
        SaturnRad0+= 4696.0 * Math.cos ( 2.149190 + 227.526189 * t);
        SaturnRad0+= 4044.0 * Math.cos ( 1.640103 + 209.366942 * t);
        SaturnRad0+= 3688.0 * Math.cos ( 0.780161 + 412.371097 * t);
        SaturnRad0+= 3461.0 * Math.cos ( 1.850888 + 175.166060 * t);
        SaturnRad0+= 3420.0 * Math.cos ( 4.945491 + 1581.959348 * t);
        SaturnRad0+= 3401.0 * Math.cos ( 0.553867 + 350.332120 * t);
        SaturnRad0+= 3376.0 * Math.cos ( 3.695285 + 224.344796 * t);
        SaturnRad0+= 2976.0 * Math.cos ( 5.684679 + 210.117702 * t);
        SaturnRad0+= 2885.0 * Math.cos ( 1.387641 + 838.969288 * t);
        SaturnRad0+= 2881.0 * Math.cos ( 0.179608 + 853.196382 * t);
        SaturnRad0+= 2508.0 * Math.cos ( 3.538519 + 742.990061 * t);
        SaturnRad0+= 2448.0 * Math.cos ( 6.184124 + 1368.660253 * t);
        SaturnRad0+= 2406.0 * Math.cos ( 2.965592 + 117.319868 * t);
        SaturnRad0+= 2174.0 * Math.cos ( 0.015086 + 340.770892 * t);
        SaturnRad0+= 2024.0 * Math.cos ( 5.054113 + 11.045700 * t);

        SaturnRad1 = 0;
        SaturnRad1+= 6182981.0 * Math.cos ( 0.258435 + 213.299095 * t);
        SaturnRad1+= 506578.0 * Math.cos ( 0.711147 + 206.185548 * t);
        SaturnRad1+= 341394.0 * Math.cos ( 5.796358 + 426.598191 * t);
        SaturnRad1+= 188491.0 * Math.cos ( 0.472157 + 220.412642 * t);
        SaturnRad1+= 186262.0 * Math.cos ( 3.141593 + 0.000000 * t);
        SaturnRad1+= 143891.0 * Math.cos ( 1.407449 + 7.113547 * t);
        SaturnRad1+= 49621.0 * Math.cos ( 6.017445 + 103.092774 * t);
        SaturnRad1+= 20928.0 * Math.cos ( 5.092457 + 639.897286 * t);
        SaturnRad1+= 19953.0 * Math.cos ( 1.175601 + 419.484644 * t);
        SaturnRad1+= 18840.0 * Math.cos ( 1.608196 + 110.206321 * t);
        SaturnRad1+= 13877.0 * Math.cos ( 0.758862 + 199.072001 * t);
        SaturnRad1+= 12893.0 * Math.cos ( 5.943303 + 433.711738 * t);
        SaturnRad1+= 5397.0 * Math.cos ( 1.288524 + 14.227094 * t);
        SaturnRad1+= 4869.0 * Math.cos ( 0.867939 + 323.505417 * t);
        SaturnRad1+= 4247.0 * Math.cos ( 0.392994 + 227.526189 * t);
        SaturnRad1+= 3252.0 * Math.cos ( 1.258535 + 95.979227 * t);
        SaturnRad1+= 3081.0 * Math.cos ( 3.436626 + 522.577418 * t);
        SaturnRad1+= 2909.0 * Math.cos ( 4.606792 + 202.253395 * t);
        SaturnRad1+= 2856.0 * Math.cos ( 2.167314 + 735.876514 * t);
        SaturnRad1+= 1988.0 * Math.cos ( 2.450542 + 412.371097 * t);
        SaturnRad1+= 1941.0 * Math.cos ( 6.023934 + 209.366942 * t);
        SaturnRad1+= 1581.0 * Math.cos ( 1.291918 + 210.117702 * t);
        SaturnRad1+= 1340.0 * Math.cos ( 4.308018 + 853.196382 * t);
        SaturnRad1+= 1316.0 * Math.cos ( 1.252964 + 117.319868 * t);
        SaturnRad1+= 1203.0 * Math.cos ( 1.866547 + 316.391870 * t);
        SaturnRad1+= 1091.0 * Math.cos ( 0.075272 + 216.480489 * t);
        SaturnRad1+= 966.0 * Math.cos ( 0.479914 + 632.783739 * t);
        SaturnRad1+= 954.0 * Math.cos ( 5.151734 + 647.010833 * t);
        SaturnRad1+= 898.0 * Math.cos ( 0.983438 + 529.690965 * t);
        SaturnRad1+= 882.0 * Math.cos ( 1.884717 + 1052.268383 * t);
        SaturnRad1+= 874.0 * Math.cos ( 1.402247 + 224.344796 * t);
        SaturnRad1+= 785.0 * Math.cos ( 3.063775 + 838.969288 * t);
        SaturnRad1+= 740.0 * Math.cos ( 1.382254 + 625.670192 * t);
        SaturnRad1+= 658.0 * Math.cos ( 4.143629 + 309.278323 * t);
        SaturnRad1+= 650.0 * Math.cos ( 1.724895 + 742.990061 * t);
        SaturnRad1+= 613.0 * Math.cos ( 3.033073 + 63.735898 * t);
        SaturnRad1+= 599.0 * Math.cos ( 2.549242 + 217.231249 * t);
        SaturnRad1+= 503.0 * Math.cos ( 2.129588 + 3.932153 * t);

        SaturnRad2 = 0;
        SaturnRad2+= 436902.0 * Math.cos ( 4.786717 + 213.299095 * t);
        SaturnRad2+= 71923.0 * Math.cos ( 2.500700 + 206.185548 * t);
        SaturnRad2+= 49767.0 * Math.cos ( 4.971682 + 220.412642 * t);
        SaturnRad2+= 43221.0 * Math.cos ( 3.869404 + 426.598191 * t);
        SaturnRad2+= 29646.0 * Math.cos ( 5.963103 + 7.113547 * t);
        SaturnRad2+= 4721.0 * Math.cos ( 2.475280 + 199.072001 * t);
        SaturnRad2+= 4142.0 * Math.cos ( 4.106709 + 433.711738 * t);
        SaturnRad2+= 3789.0 * Math.cos ( 3.097710 + 639.897286 * t);
        SaturnRad2+= 2964.0 * Math.cos ( 1.372062 + 103.092774 * t);
        SaturnRad2+= 2556.0 * Math.cos ( 2.850657 + 419.484644 * t);
        SaturnRad2+= 2327.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnRad2+= 2208.0 * Math.cos ( 6.275889 + 110.206321 * t);
        SaturnRad2+= 2188.0 * Math.cos ( 5.855458 + 14.227094 * t);
        SaturnRad2+= 1957.0 * Math.cos ( 4.924486 + 227.526189 * t);
        SaturnRad2+= 924.0 * Math.cos ( 5.463924 + 323.505417 * t);
        SaturnRad2+= 706.0 * Math.cos ( 2.970813 + 95.979227 * t);
        SaturnRad2+= 546.0 * Math.cos ( 4.128542 + 412.371097 * t);
        SaturnRad2+= 431.0 * Math.cos ( 5.178254 + 522.577418 * t);
        SaturnRad2+= 405.0 * Math.cos ( 4.172942 + 209.366942 * t);
        SaturnRad2+= 391.0 * Math.cos ( 4.481062 + 216.480489 * t);
        SaturnRad2+= 374.0 * Math.cos ( 5.834360 + 117.319868 * t);
        SaturnRad2+= 361.0 * Math.cos ( 3.277031 + 647.010833 * t);
        SaturnRad2+= 356.0 * Math.cos ( 3.191520 + 210.117702 * t);
        SaturnRad2+= 326.0 * Math.cos ( 2.268676 + 853.196382 * t);
        SaturnRad2+= 207.0 * Math.cos ( 4.021883 + 735.876514 * t);
        SaturnRad2+= 204.0 * Math.cos ( 0.087748 + 202.253395 * t);
        SaturnRad2+= 180.0 * Math.cos ( 3.597049 + 632.783739 * t);
        SaturnRad2+= 178.0 * Math.cos ( 4.097165 + 440.825285 * t);
        SaturnRad2+= 154.0 * Math.cos ( 3.134705 + 625.670192 * t);
        SaturnRad2+= 148.0 * Math.cos ( 0.136143 + 302.164776 * t);
        SaturnRad2+= 133.0 * Math.cos ( 2.593505 + 191.958454 * t);
        SaturnRad2+= 132.0 * Math.cos ( 5.932940 + 309.278323 * t);

        SaturnRad3 = 0;
        SaturnRad3+= 20315.0 * Math.cos ( 3.021866 + 213.299095 * t);
        SaturnRad3+= 8924.0 * Math.cos ( 3.191442 + 220.412642 * t);
        SaturnRad3+= 6909.0 * Math.cos ( 4.351749 + 206.185548 * t);
        SaturnRad3+= 4087.0 * Math.cos ( 4.224069 + 7.113547 * t);
        SaturnRad3+= 3879.0 * Math.cos ( 2.010564 + 426.598191 * t);
        SaturnRad3+= 1071.0 * Math.cos ( 4.203603 + 199.072001 * t);
        SaturnRad3+= 907.0 * Math.cos ( 2.283444 + 433.711738 * t);
        SaturnRad3+= 606.0 * Math.cos ( 3.174586 + 227.526189 * t);
        SaturnRad3+= 597.0 * Math.cos ( 4.134558 + 14.227094 * t);
        SaturnRad3+= 483.0 * Math.cos ( 1.173460 + 639.897286 * t);
        SaturnRad3+= 393.0 * Math.cos ( 0.000000 + 0.000000 * t);
        SaturnRad3+= 229.0 * Math.cos ( 4.698385 + 419.484644 * t);
        SaturnRad3+= 188.0 * Math.cos ( 4.590039 + 110.206321 * t);
        SaturnRad3+= 150.0 * Math.cos ( 3.201994 + 103.092774 * t);
        SaturnRad3+= 121.0 * Math.cos ( 3.768314 + 323.505417 * t);
        SaturnRad3+= 102.0 * Math.cos ( 4.709744 + 95.979227 * t);
        SaturnRad3+= 101.0 * Math.cos ( 5.818841 + 412.371097 * t);
        SaturnRad3+= 93.0 * Math.cos ( 1.435313 + 647.010833 * t);
        SaturnRad3+= 84.0 * Math.cos ( 2.634624 + 216.480489 * t);
        SaturnRad3+= 73.0 * Math.cos ( 4.153956 + 117.319868 * t);
        SaturnRad3+= 62.0 * Math.cos ( 2.312393 + 440.825285 * t);
        SaturnRad3+= 55.0 * Math.cos ( 0.305265 + 853.196382 * t);
        SaturnRad3+= 50.0 * Math.cos ( 2.388542 + 209.366942 * t);
        SaturnRad3+= 45.0 * Math.cos ( 4.373170 + 191.958454 * t);
        SaturnRad3+= 41.0 * Math.cos ( 0.688452 + 522.577418 * t);
        SaturnRad3+= 40.0 * Math.cos ( 1.838366 + 302.164776 * t);
        SaturnRad3+= 38.0 * Math.cos ( 5.944551 + 88.865680 * t);
        SaturnRad3+= 32.0 * Math.cos ( 4.011463 + 21.340641 * t);

        SaturnRad4 = 0;
        SaturnRad4+= 1202.0 * Math.cos ( 1.414994 + 220.412642 * t);
        SaturnRad4+= 708.0 * Math.cos ( 1.161536 + 213.299095 * t);
        SaturnRad4+= 516.0 * Math.cos ( 6.239736 + 206.185548 * t);
        SaturnRad4+= 427.0 * Math.cos ( 2.469249 + 7.113547 * t);
        SaturnRad4+= 268.0 * Math.cos ( 0.186592 + 426.598191 * t);
        SaturnRad4+= 170.0 * Math.cos ( 5.959270 + 199.072001 * t);
        SaturnRad4+= 150.0 * Math.cos ( 0.479702 + 433.711738 * t);
        SaturnRad4+= 145.0 * Math.cos ( 1.442111 + 227.526189 * t);
        SaturnRad4+= 121.0 * Math.cos ( 2.405273 + 14.227094 * t);
        SaturnRad4+= 47.0 * Math.cos ( 5.568575 + 639.897286 * t);
        SaturnRad4+= 19.0 * Math.cos ( 5.856264 + 647.010833 * t);
        SaturnRad4+= 17.0 * Math.cos ( 0.529208 + 440.825285 * t);
        SaturnRad4+= 16.0 * Math.cos ( 2.901125 + 110.206321 * t);
        SaturnRad4+= 15.0 * Math.cos ( 0.299053 + 419.484644 * t);
        SaturnRad4+= 14.0 * Math.cos ( 1.303436 + 412.371097 * t);
        SaturnRad4+= 13.0 * Math.cos ( 2.093493 + 323.505417 * t);
        SaturnRad4+= 11.0 * Math.cos ( 0.217855 + 95.979227 * t);
        SaturnRad4+= 11.0 * Math.cos ( 2.463048 + 117.319868 * t);
        SaturnRad4+= 10.0 * Math.cos ( 3.141593 + 0.000000 * t);
        SaturnRad4+= 9.0 * Math.cos ( 1.564963 + 88.865680 * t);
        SaturnRad4+= 9.0 * Math.cos ( 2.281273 + 21.340641 * t);
        SaturnRad4+= 9.0 * Math.cos ( 0.683013 + 216.480489 * t);
        SaturnRad4+= 8.0 * Math.cos ( 1.272395 + 234.639736 * t);

        SaturnRad5 = 0;
        SaturnRad5+= 129.0 * Math.cos ( 5.912826 + 220.412642 * t);
        SaturnRad5+= 32.0 * Math.cos ( 0.692562 + 7.113547 * t);
        SaturnRad5+= 27.0 * Math.cos ( 5.914285 + 227.526189 * t);
        SaturnRad5+= 20.0 * Math.cos ( 4.951368 + 433.711738 * t);
        SaturnRad5+= 20.0 * Math.cos ( 0.673707 + 14.227094 * t);
        SaturnRad5+= 14.0 * Math.cos ( 2.670743 + 206.185548 * t);
        SaturnRad5+= 14.0 * Math.cos ( 1.456695 + 199.072001 * t);
        SaturnRad5+= 13.0 * Math.cos ( 4.588270 + 426.598191 * t);
        SaturnRad5+= 7.0 * Math.cos ( 4.629661 + 213.299095 * t);
        SaturnRad5+= 5.0 * Math.cos ( 3.614483 + 639.897286 * t);
        SaturnRad5+= 4.0 * Math.cos ( 4.896242 + 440.825285 * t);
        SaturnRad5+= 3.0 * Math.cos ( 4.071909 + 647.010833 * t);
        SaturnRad5+= 3.0 * Math.cos ( 4.656610 + 191.958454 * t);
        SaturnRad5+= 3.0 * Math.cos ( 0.486653 + 323.505417 * t);
        SaturnRad5+= 3.0 * Math.cos ( 3.180030 + 419.484644 * t);
        SaturnRad5+= 2.0 * Math.cos ( 3.695536 + 88.865680 * t);
        SaturnRad5+= 2.0 * Math.cos ( 3.316636 + 95.979227 * t);
        SaturnRad5+= 2.0 * Math.cos ( 0.560256 + 117.319868 * t);

        SaturnRad =
        + SaturnRad0 * t0
        + SaturnRad1 * t1
        + SaturnRad2 * t2
        + SaturnRad3 * t3
        + SaturnRad4 * t4
        + SaturnRad5 * t5;

        Rad_T = SaturnRad; 
    }


    //Uranus
    if (id00==8) {
        UranusLon0 = 0;
        UranusLon0+= 548129294.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusLon0+= 9260408.0 * Math.cos ( 0.891064 + 74.781599 * t);
        UranusLon0+= 1504248.0 * Math.cos ( 3.627193 + 1.484473 * t);
        UranusLon0+= 365982.0 * Math.cos ( 1.899622 + 73.297126 * t);
        UranusLon0+= 272328.0 * Math.cos ( 3.358237 + 149.563197 * t);
        UranusLon0+= 70328.0 * Math.cos ( 5.392544 + 63.735898 * t);
        UranusLon0+= 68893.0 * Math.cos ( 6.092925 + 76.266071 * t);
        UranusLon0+= 61999.0 * Math.cos ( 2.269520 + 2.968945 * t);
        UranusLon0+= 61951.0 * Math.cos ( 2.850989 + 11.045700 * t);
        UranusLon0+= 26469.0 * Math.cos ( 3.141521 + 71.812653 * t);
        UranusLon0+= 25711.0 * Math.cos ( 6.113798 + 454.909367 * t);
        UranusLon0+= 21079.0 * Math.cos ( 4.360595 + 148.078724 * t);
        UranusLon0+= 17819.0 * Math.cos ( 1.744370 + 36.648563 * t);
        UranusLon0+= 14613.0 * Math.cos ( 4.737320 + 3.932153 * t);
        UranusLon0+= 11163.0 * Math.cos ( 5.826820 + 224.344796 * t);
        UranusLon0+= 10998.0 * Math.cos ( 0.488655 + 138.517497 * t);
        UranusLon0+= 9527.0 * Math.cos ( 2.955169 + 35.164090 * t);
        UranusLon0+= 7546.0 * Math.cos ( 5.236264 + 109.945689 * t);
        UranusLon0+= 4220.0 * Math.cos ( 3.233285 + 70.849445 * t);
        UranusLon0+= 4052.0 * Math.cos ( 2.277542 + 151.047670 * t);
        UranusLon0+= 3490.0 * Math.cos ( 5.483056 + 146.594252 * t);
        UranusLon0+= 3355.0 * Math.cos ( 1.065490 + 4.453418 * t);
        UranusLon0+= 3144.0 * Math.cos ( 4.751993 + 77.750544 * t);
        UranusLon0+= 2927.0 * Math.cos ( 4.629037 + 9.561228 * t);
        UranusLon0+= 2922.0 * Math.cos ( 5.352367 + 85.827299 * t);
        UranusLon0+= 2273.0 * Math.cos ( 4.366008 + 70.328180 * t);
        UranusLon0+= 2149.0 * Math.cos ( 0.607458 + 38.133036 * t);
        UranusLon0+= 2051.0 * Math.cos ( 1.517736 + 0.111875 * t);
        UranusLon0+= 1992.0 * Math.cos ( 4.924373 + 277.034994 * t);
        UranusLon0+= 1667.0 * Math.cos ( 3.627446 + 380.127768 * t);
        UranusLon0+= 1533.0 * Math.cos ( 2.585934 + 52.690198 * t);
        UranusLon0+= 1376.0 * Math.cos ( 2.042814 + 65.220371 * t);
        UranusLon0+= 1372.0 * Math.cos ( 4.196416 + 111.430161 * t);
        UranusLon0+= 1284.0 * Math.cos ( 3.113463 + 202.253395 * t);
        UranusLon0+= 1282.0 * Math.cos ( 0.542699 + 222.860323 * t);
        UranusLon0+= 1244.0 * Math.cos ( 0.916127 + 2.447681 * t);
        UranusLon0+= 1221.0 * Math.cos ( 0.199014 + 108.461216 * t);
        UranusLon0+= 1151.0 * Math.cos ( 4.178982 + 33.679618 * t);
        UranusLon0+= 1150.0 * Math.cos ( 0.933445 + 3.181394 * t);
        UranusLon0+= 1090.0 * Math.cos ( 1.775016 + 12.530173 * t);
        UranusLon0+= 1072.0 * Math.cos ( 0.235645 + 62.251426 * t);
        UranusLon0+= 946.0 * Math.cos ( 1.192495 + 127.471797 * t);
        UranusLon0+= 708.0 * Math.cos ( 5.182852 + 213.299095 * t);
        UranusLon0+= 653.0 * Math.cos ( 0.965869 + 78.713752 * t);
        UranusLon0+= 628.0 * Math.cos ( 0.182102 + 984.600332 * t);
        UranusLon0+= 607.0 * Math.cos ( 5.432097 + 529.690965 * t);
        UranusLon0+= 559.0 * Math.cos ( 3.357767 + 0.521265 * t);
        UranusLon0+= 524.0 * Math.cos ( 2.012767 + 299.126394 * t);
        UranusLon0+= 483.0 * Math.cos ( 2.105540 + 0.963208 * t);
        UranusLon0+= 471.0 * Math.cos ( 1.406643 + 184.727287 * t);
        UranusLon0+= 467.0 * Math.cos ( 0.414841 + 145.109779 * t);
        UranusLon0+= 434.0 * Math.cos ( 5.521430 + 183.242815 * t);
        UranusLon0+= 405.0 * Math.cos ( 5.986890 + 8.076755 * t);
        UranusLon0+= 399.0 * Math.cos ( 0.338108 + 415.552491 * t);
        UranusLon0+= 396.0 * Math.cos ( 5.870396 + 351.816592 * t);
        UranusLon0+= 379.0 * Math.cos ( 2.349758 + 56.622351 * t);
        UranusLon0+= 310.0 * Math.cos ( 5.833013 + 145.631044 * t);
        UranusLon0+= 300.0 * Math.cos ( 5.643540 + 22.091401 * t);
        UranusLon0+= 294.0 * Math.cos ( 5.839168 + 39.617508 * t);
        UranusLon0+= 252.0 * Math.cos ( 1.636968 + 221.375850 * t);
        UranusLon0+= 249.0 * Math.cos ( 4.746171 + 225.829268 * t);
        UranusLon0+= 239.0 * Math.cos ( 2.350459 + 137.033024 * t);
        UranusLon0+= 224.0 * Math.cos ( 0.515749 + 84.342826 * t);
        UranusLon0+= 223.0 * Math.cos ( 2.843094 + 0.260632 * t);
        UranusLon0+= 220.0 * Math.cos ( 1.922130 + 67.668052 * t);
        UranusLon0+= 217.0 * Math.cos ( 6.142119 + 5.937891 * t);
        UranusLon0+= 216.0 * Math.cos ( 4.778475 + 340.770892 * t);
        UranusLon0+= 208.0 * Math.cos ( 5.580206 + 68.843708 * t);
        UranusLon0+= 202.0 * Math.cos ( 1.296930 + 0.048184 * t);
        UranusLon0+= 199.0 * Math.cos ( 0.956342 + 152.532143 * t);
        UranusLon0+= 194.0 * Math.cos ( 1.888001 + 456.393839 * t);
        UranusLon0+= 193.0 * Math.cos ( 0.916161 + 453.424894 * t);
        UranusLon0+= 187.0 * Math.cos ( 1.319243 + 0.160059 * t);
        UranusLon0+= 182.0 * Math.cos ( 3.536240 + 79.235017 * t);
        UranusLon0+= 173.0 * Math.cos ( 1.538607 + 160.608897 * t);
        UranusLon0+= 172.0 * Math.cos ( 5.679527 + 219.891378 * t);
        UranusLon0+= 170.0 * Math.cos ( 3.677175 + 5.416626 * t);
        UranusLon0+= 169.0 * Math.cos ( 5.878740 + 18.159247 * t);
        UranusLon0+= 165.0 * Math.cos ( 1.423797 + 106.976743 * t);
        UranusLon0+= 163.0 * Math.cos ( 3.050294 + 112.914634 * t);
        UranusLon0+= 158.0 * Math.cos ( 0.738120 + 54.174671 * t);
        UranusLon0+= 147.0 * Math.cos ( 1.263002 + 59.803745 * t);
        UranusLon0+= 143.0 * Math.cos ( 1.299955 + 35.424723 * t);
        UranusLon0+= 139.0 * Math.cos ( 5.385977 + 32.195145 * t);
        UranusLon0+= 139.0 * Math.cos ( 4.259948 + 909.818733 * t);
        UranusLon0+= 124.0 * Math.cos ( 1.373600 + 7.113547 * t);
        UranusLon0+= 110.0 * Math.cos ( 2.026858 + 554.069987 * t);
        UranusLon0+= 109.0 * Math.cos ( 5.705818 + 77.962992 * t);
        UranusLon0+= 104.0 * Math.cos ( 5.028209 + 0.750760 * t);
        UranusLon0+= 104.0 * Math.cos ( 1.457703 + 24.379022 * t);
        UranusLon0+= 103.0 * Math.cos ( 0.680953 + 14.977854 * t);

        UranusLon1 = 0;
        UranusLon1+= 7502543122.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusLon1+= 154458.0 * Math.cos ( 5.242017 + 74.781599 * t);
        UranusLon1+= 24456.0 * Math.cos ( 1.712557 + 1.484473 * t);
        UranusLon1+= 9258.0 * Math.cos ( 0.428446 + 11.045700 * t);
        UranusLon1+= 8266.0 * Math.cos ( 1.502200 + 63.735898 * t);
        UranusLon1+= 7842.0 * Math.cos ( 1.319836 + 149.563197 * t);
        UranusLon1+= 3899.0 * Math.cos ( 0.464836 + 3.932153 * t);
        UranusLon1+= 2284.0 * Math.cos ( 4.173675 + 76.266071 * t);
        UranusLon1+= 1927.0 * Math.cos ( 0.530131 + 2.968945 * t);
        UranusLon1+= 1233.0 * Math.cos ( 1.586345 + 70.849445 * t);
        UranusLon1+= 791.0 * Math.cos ( 5.436412 + 3.181394 * t);
        UranusLon1+= 767.0 * Math.cos ( 1.995554 + 73.297126 * t);
        UranusLon1+= 482.0 * Math.cos ( 2.984020 + 85.827299 * t);
        UranusLon1+= 450.0 * Math.cos ( 4.138262 + 138.517497 * t);
        UranusLon1+= 446.0 * Math.cos ( 3.723004 + 224.344796 * t);
        UranusLon1+= 427.0 * Math.cos ( 4.731261 + 71.812653 * t);
        UranusLon1+= 354.0 * Math.cos ( 2.583245 + 148.078724 * t);
        UranusLon1+= 348.0 * Math.cos ( 2.453723 + 9.561228 * t);
        UranusLon1+= 317.0 * Math.cos ( 5.578552 + 52.690198 * t);
        UranusLon1+= 206.0 * Math.cos ( 2.362631 + 2.447681 * t);
        UranusLon1+= 189.0 * Math.cos ( 4.202429 + 56.622351 * t);
        UranusLon1+= 184.0 * Math.cos ( 0.283710 + 151.047670 * t);
        UranusLon1+= 180.0 * Math.cos ( 5.683677 + 12.530173 * t);
        UranusLon1+= 171.0 * Math.cos ( 3.000601 + 78.713752 * t);
        UranusLon1+= 158.0 * Math.cos ( 2.909320 + 0.963208 * t);
        UranusLon1+= 155.0 * Math.cos ( 5.590839 + 4.453418 * t);
        UranusLon1+= 154.0 * Math.cos ( 4.651869 + 35.164090 * t);
        UranusLon1+= 152.0 * Math.cos ( 2.942173 + 77.750544 * t);
        UranusLon1+= 143.0 * Math.cos ( 2.590492 + 62.251426 * t);
        UranusLon1+= 121.0 * Math.cos ( 4.148392 + 127.471797 * t);
        UranusLon1+= 116.0 * Math.cos ( 3.732246 + 65.220371 * t);
        UranusLon1+= 102.0 * Math.cos ( 4.187545 + 145.631044 * t);
        UranusLon1+= 102.0 * Math.cos ( 6.033859 + 0.111875 * t);
        UranusLon1+= 88.0 * Math.cos ( 3.990358 + 18.159247 * t);
        UranusLon1+= 88.0 * Math.cos ( 6.155208 + 202.253395 * t);
        UranusLon1+= 81.0 * Math.cos ( 2.641247 + 22.091401 * t);
        UranusLon1+= 72.0 * Math.cos ( 6.045459 + 70.328180 * t);
        UranusLon1+= 69.0 * Math.cos ( 4.050719 + 77.962992 * t);
        UranusLon1+= 59.0 * Math.cos ( 3.704139 + 67.668052 * t);
        UranusLon1+= 47.0 * Math.cos ( 3.543125 + 351.816592 * t);
        UranusLon1+= 44.0 * Math.cos ( 5.908658 + 7.113547 * t);
        UranusLon1+= 43.0 * Math.cos ( 5.723574 + 5.416626 * t);
        UranusLon1+= 39.0 * Math.cos ( 4.915190 + 222.860323 * t);
        UranusLon1+= 36.0 * Math.cos ( 5.899643 + 33.679618 * t);
        UranusLon1+= 36.0 * Math.cos ( 3.291973 + 8.076755 * t);
        UranusLon1+= 36.0 * Math.cos ( 3.327846 + 71.600205 * t);
        UranusLon1+= 35.0 * Math.cos ( 5.080341 + 38.133036 * t);
        UranusLon1+= 31.0 * Math.cos ( 5.620156 + 984.600332 * t);
        UranusLon1+= 31.0 * Math.cos ( 5.495914 + 59.803745 * t);
        UranusLon1+= 31.0 * Math.cos ( 5.464146 + 160.608897 * t);
        UranusLon1+= 30.0 * Math.cos ( 1.659808 + 447.795820 * t);
        UranusLon1+= 29.0 * Math.cos ( 1.147226 + 462.022914 * t);
        UranusLon1+= 29.0 * Math.cos ( 4.518674 + 84.342826 * t);
        UranusLon1+= 27.0 * Math.cos ( 5.541273 + 131.403950 * t);
        UranusLon1+= 27.0 * Math.cos ( 6.146406 + 299.126394 * t);
        UranusLon1+= 26.0 * Math.cos ( 4.993620 + 137.033024 * t);
        UranusLon1+= 25.0 * Math.cos ( 5.735847 + 380.127768 * t);

        UranusLon2 = 0;
        UranusLon2+= 53033.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusLon2+= 2358.0 * Math.cos ( 2.260147 + 74.781599 * t);
        UranusLon2+= 769.0 * Math.cos ( 4.525610 + 11.045700 * t);
        UranusLon2+= 552.0 * Math.cos ( 3.258143 + 63.735898 * t);
        UranusLon2+= 542.0 * Math.cos ( 2.275739 + 3.932153 * t);
        UranusLon2+= 529.0 * Math.cos ( 4.923484 + 1.484473 * t);
        UranusLon2+= 258.0 * Math.cos ( 3.690592 + 3.181394 * t);
        UranusLon2+= 239.0 * Math.cos ( 5.858066 + 149.563197 * t);
        UranusLon2+= 182.0 * Math.cos ( 6.217636 + 70.849445 * t);
        UranusLon2+= 54.0 * Math.cos ( 1.442252 + 76.266071 * t);
        UranusLon2+= 49.0 * Math.cos ( 6.031013 + 56.622351 * t);
        UranusLon2+= 45.0 * Math.cos ( 3.909049 + 2.447681 * t);
        UranusLon2+= 45.0 * Math.cos ( 0.811526 + 85.827299 * t);
        UranusLon2+= 38.0 * Math.cos ( 1.784678 + 52.690198 * t);
        UranusLon2+= 37.0 * Math.cos ( 4.462286 + 2.968945 * t);
        UranusLon2+= 33.0 * Math.cos ( 0.863881 + 9.561228 * t);
        UranusLon2+= 29.0 * Math.cos ( 5.098187 + 73.297126 * t);
        UranusLon2+= 24.0 * Math.cos ( 2.107026 + 18.159247 * t);
        UranusLon2+= 22.0 * Math.cos ( 5.993207 + 138.517497 * t);
        UranusLon2+= 22.0 * Math.cos ( 4.817308 + 78.713752 * t);
        UranusLon2+= 21.0 * Math.cos ( 2.398807 + 77.962992 * t);
        UranusLon2+= 21.0 * Math.cos ( 2.169188 + 224.344796 * t);
        UranusLon2+= 17.0 * Math.cos ( 2.535372 + 145.631044 * t);
        UranusLon2+= 17.0 * Math.cos ( 3.466313 + 12.530173 * t);
        UranusLon2+= 12.0 * Math.cos ( 0.019414 + 22.091401 * t);
        UranusLon2+= 11.0 * Math.cos ( 0.084963 + 127.471797 * t);
        UranusLon2+= 10.0 * Math.cos ( 5.164531 + 71.600205 * t);
        UranusLon2+= 10.0 * Math.cos ( 4.455560 + 62.251426 * t);
        UranusLon2+= 9.0 * Math.cos ( 4.255501 + 7.113547 * t);
        UranusLon2+= 8.0 * Math.cos ( 5.501159 + 67.668052 * t);
        UranusLon2+= 7.0 * Math.cos ( 1.249039 + 5.416626 * t);
        UranusLon2+= 6.0 * Math.cos ( 3.363202 + 447.795820 * t);
        UranusLon2+= 6.0 * Math.cos ( 5.446117 + 65.220371 * t);
        UranusLon2+= 6.0 * Math.cos ( 4.518368 + 151.047670 * t);
        UranusLon2+= 6.0 * Math.cos ( 5.725001 + 462.022914 * t);

        UranusLon3 = 0;
        UranusLon3+= 121.0 * Math.cos ( 0.024188 + 74.781599 * t);
        UranusLon3+= 68.0 * Math.cos ( 4.120843 + 3.932153 * t);
        UranusLon3+= 53.0 * Math.cos ( 2.389641 + 11.045700 * t);
        UranusLon3+= 46.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusLon3+= 45.0 * Math.cos ( 2.044238 + 3.181394 * t);
        UranusLon3+= 44.0 * Math.cos ( 2.959650 + 1.484473 * t);
        UranusLon3+= 25.0 * Math.cos ( 4.887413 + 63.735898 * t);
        UranusLon3+= 21.0 * Math.cos ( 4.545115 + 70.849445 * t);
        UranusLon3+= 20.0 * Math.cos ( 2.313203 + 149.563197 * t);
        UranusLon3+= 9.0 * Math.cos ( 1.575489 + 56.622351 * t);
        UranusLon3+= 4.0 * Math.cos ( 0.227773 + 18.159247 * t);
        UranusLon3+= 4.0 * Math.cos ( 5.392446 + 76.266071 * t);
        UranusLon3+= 4.0 * Math.cos ( 0.950524 + 77.962992 * t);
        UranusLon3+= 3.0 * Math.cos ( 4.976228 + 85.827299 * t);
        UranusLon3+= 3.0 * Math.cos ( 4.129694 + 52.690198 * t);
        UranusLon3+= 3.0 * Math.cos ( 0.372878 + 78.713752 * t);
        UranusLon3+= 2.0 * Math.cos ( 0.857710 + 145.631044 * t);
        UranusLon3+= 2.0 * Math.cos ( 5.656478 + 9.561228 * t);

        UranusLon4 = 0;
        UranusLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);
        UranusLon4+= 6.0 * Math.cos ( 4.578824 + 74.781599 * t);
        UranusLon4+= 3.0 * Math.cos ( 0.346230 + 11.045700 * t);
        UranusLon4+= 1.0 * Math.cos ( 3.421991 + 56.622351 * t);

        UranusLon5 = 0;

        UranusLon =
        + UranusLon0 * t0
        + UranusLon1 * t1
        + UranusLon2 * t2
        + UranusLon3 * t3
        + UranusLon4 * t4
        + UranusLon5 * t5;

        Lon_T = UranusLon; 

        UranusLat0 = 0;
        UranusLat0+= 1346278.0 * Math.cos ( 2.618778 + 74.781599 * t);
        UranusLat0+= 62341.0 * Math.cos ( 5.081112 + 149.563197 * t);
        UranusLat0+= 61601.0 * Math.cos ( 3.141593 + 0.000000 * t);
        UranusLat0+= 9964.0 * Math.cos ( 1.616039 + 76.266071 * t);
        UranusLat0+= 9926.0 * Math.cos ( 0.576304 + 73.297126 * t);
        UranusLat0+= 3259.0 * Math.cos ( 1.261194 + 224.344796 * t);
        UranusLat0+= 2972.0 * Math.cos ( 2.243670 + 1.484473 * t);
        UranusLat0+= 2010.0 * Math.cos ( 6.055504 + 148.078724 * t);
        UranusLat0+= 1522.0 * Math.cos ( 0.279604 + 63.735898 * t);
        UranusLat0+= 924.0 * Math.cos ( 4.038229 + 151.047670 * t);
        UranusLat0+= 761.0 * Math.cos ( 6.140004 + 71.812653 * t);
        UranusLat0+= 522.0 * Math.cos ( 3.320852 + 138.517497 * t);
        UranusLat0+= 463.0 * Math.cos ( 0.742567 + 85.827299 * t);
        UranusLat0+= 437.0 * Math.cos ( 3.380825 + 529.690965 * t);
        UranusLat0+= 435.0 * Math.cos ( 0.340653 + 77.750544 * t);
        UranusLat0+= 431.0 * Math.cos ( 3.554450 + 213.299095 * t);
        UranusLat0+= 420.0 * Math.cos ( 5.212800 + 11.045700 * t);
        UranusLat0+= 245.0 * Math.cos ( 0.787952 + 2.968945 * t);
        UranusLat0+= 233.0 * Math.cos ( 2.257164 + 222.860323 * t);
        UranusLat0+= 216.0 * Math.cos ( 1.591217 + 38.133036 * t);
        UranusLat0+= 180.0 * Math.cos ( 3.724880 + 299.126394 * t);
        UranusLat0+= 175.0 * Math.cos ( 1.235503 + 146.594252 * t);
        UranusLat0+= 174.0 * Math.cos ( 1.936543 + 380.127768 * t);
        UranusLat0+= 160.0 * Math.cos ( 5.336354 + 111.430161 * t);
        UranusLat0+= 144.0 * Math.cos ( 5.962393 + 35.164090 * t);
        UranusLat0+= 116.0 * Math.cos ( 5.738772 + 70.849445 * t);
        UranusLat0+= 106.0 * Math.cos ( 0.941031 + 70.328180 * t);
        UranusLat0+= 102.0 * Math.cos ( 2.618763 + 78.713752 * t);

        UranusLat1 = 0;
        UranusLat1+= 206366.0 * Math.cos ( 4.123943 + 74.781599 * t);
        UranusLat1+= 8563.0 * Math.cos ( 0.338200 + 149.563197 * t);
        UranusLat1+= 1726.0 * Math.cos ( 2.121932 + 73.297126 * t);
        UranusLat1+= 1374.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusLat1+= 1369.0 * Math.cos ( 3.068617 + 76.266071 * t);
        UranusLat1+= 451.0 * Math.cos ( 3.776562 + 1.484473 * t);
        UranusLat1+= 400.0 * Math.cos ( 2.847670 + 224.344796 * t);
        UranusLat1+= 307.0 * Math.cos ( 1.254568 + 148.078724 * t);
        UranusLat1+= 154.0 * Math.cos ( 3.785755 + 63.735898 * t);
        UranusLat1+= 112.0 * Math.cos ( 5.572999 + 151.047670 * t);
        UranusLat1+= 111.0 * Math.cos ( 5.328887 + 138.517497 * t);
        UranusLat1+= 83.0 * Math.cos ( 3.591528 + 71.812653 * t);
        UranusLat1+= 56.0 * Math.cos ( 3.401354 + 85.827299 * t);
        UranusLat1+= 54.0 * Math.cos ( 1.704558 + 77.750544 * t);
        UranusLat1+= 42.0 * Math.cos ( 1.214766 + 11.045700 * t);
        UranusLat1+= 41.0 * Math.cos ( 4.454767 + 78.713752 * t);
        UranusLat1+= 32.0 * Math.cos ( 3.774462 + 222.860323 * t);
        UranusLat1+= 30.0 * Math.cos ( 2.563717 + 2.968945 * t);
        UranusLat1+= 27.0 * Math.cos ( 5.336955 + 213.299095 * t);
        UranusLat1+= 26.0 * Math.cos ( 0.416206 + 380.127768 * t);

        UranusLat2 = 0;
        UranusLat2+= 9212.0 * Math.cos ( 5.800443 + 74.781599 * t);
        UranusLat2+= 557.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusLat2+= 286.0 * Math.cos ( 2.177298 + 149.563197 * t);
        UranusLat2+= 95.0 * Math.cos ( 3.842376 + 73.297126 * t);
        UranusLat2+= 45.0 * Math.cos ( 4.878220 + 76.266071 * t);
        UranusLat2+= 20.0 * Math.cos ( 5.462645 + 1.484473 * t);
        UranusLat2+= 15.0 * Math.cos ( 0.879837 + 138.517497 * t);
        UranusLat2+= 14.0 * Math.cos ( 2.845177 + 148.078724 * t);
        UranusLat2+= 14.0 * Math.cos ( 5.072340 + 63.735898 * t);
        UranusLat2+= 10.0 * Math.cos ( 5.002909 + 224.344796 * t);
        UranusLat2+= 8.0 * Math.cos ( 6.266556 + 78.713752 * t);

        UranusLat3 = 0;
        UranusLat3+= 268.0 * Math.cos ( 1.250979 + 74.781599 * t);
        UranusLat3+= 11.0 * Math.cos ( 3.141593 + 0.000000 * t);
        UranusLat3+= 6.0 * Math.cos ( 4.006636 + 149.563197 * t);
        UranusLat3+= 3.0 * Math.cos ( 5.778047 + 73.297126 * t);

        UranusLat4 = 0;
        UranusLat4+= 6.0 * Math.cos ( 2.854995 + 74.781599 * t);

        UranusLat5 = 0;

        UranusLat =
        + UranusLat0 * t0
        + UranusLat1 * t1
        + UranusLat2 * t2
        + UranusLat3 * t3
        + UranusLat4 * t4
        + UranusLat5 * t5;

        Lat_T = UranusLat; 

        UranusRad0 = 0;
        UranusRad0+= 1921264848.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusRad0+= 88784984.0 * Math.cos ( 5.603775 + 74.781599 * t);
        UranusRad0+= 3440836.0 * Math.cos ( 0.328361 + 73.297126 * t);
        UranusRad0+= 2055653.0 * Math.cos ( 1.782952 + 149.563197 * t);
        UranusRad0+= 649322.0 * Math.cos ( 4.522473 + 76.266071 * t);
        UranusRad0+= 602248.0 * Math.cos ( 3.860038 + 63.735898 * t);
        UranusRad0+= 496404.0 * Math.cos ( 1.401399 + 454.909367 * t);
        UranusRad0+= 338526.0 * Math.cos ( 1.580027 + 138.517497 * t);
        UranusRad0+= 243508.0 * Math.cos ( 1.570866 + 71.812653 * t);
        UranusRad0+= 190522.0 * Math.cos ( 1.998094 + 1.484473 * t);
        UranusRad0+= 161858.0 * Math.cos ( 2.791379 + 148.078724 * t);
        UranusRad0+= 143706.0 * Math.cos ( 1.383686 + 11.045700 * t);
        UranusRad0+= 93192.0 * Math.cos ( 0.174372 + 36.648563 * t);
        UranusRad0+= 89806.0 * Math.cos ( 3.661054 + 109.945689 * t);
        UranusRad0+= 71424.0 * Math.cos ( 4.245093 + 224.344796 * t);
        UranusRad0+= 46677.0 * Math.cos ( 1.399766 + 35.164090 * t);
        UranusRad0+= 39026.0 * Math.cos ( 3.362347 + 277.034994 * t);
        UranusRad0+= 39010.0 * Math.cos ( 1.669711 + 70.849445 * t);
        UranusRad0+= 36755.0 * Math.cos ( 3.886489 + 146.594252 * t);
        UranusRad0+= 30349.0 * Math.cos ( 0.701004 + 151.047670 * t);
        UranusRad0+= 29156.0 * Math.cos ( 3.180562 + 77.750544 * t);
        UranusRad0+= 25786.0 * Math.cos ( 3.785377 + 85.827299 * t);
        UranusRad0+= 25620.0 * Math.cos ( 5.256563 + 380.127768 * t);
        UranusRad0+= 22637.0 * Math.cos ( 0.725191 + 529.690965 * t);
        UranusRad0+= 20473.0 * Math.cos ( 2.796398 + 70.328180 * t);
        UranusRad0+= 20472.0 * Math.cos ( 1.555890 + 202.253395 * t);
        UranusRad0+= 17901.0 * Math.cos ( 0.554555 + 2.968945 * t);
        UranusRad0+= 15503.0 * Math.cos ( 5.354050 + 38.133036 * t);
        UranusRad0+= 14702.0 * Math.cos ( 4.904344 + 108.461216 * t);
        UranusRad0+= 12897.0 * Math.cos ( 2.621540 + 111.430161 * t);
        UranusRad0+= 12328.0 * Math.cos ( 5.960392 + 127.471797 * t);
        UranusRad0+= 11959.0 * Math.cos ( 1.750441 + 984.600332 * t);
        UranusRad0+= 11853.0 * Math.cos ( 0.993428 + 52.690198 * t);
        UranusRad0+= 11696.0 * Math.cos ( 3.298256 + 3.932153 * t);
        UranusRad0+= 11495.0 * Math.cos ( 0.437740 + 65.220371 * t);
        UranusRad0+= 10793.0 * Math.cos ( 1.421049 + 213.299095 * t);
        UranusRad0+= 9111.0 * Math.cos ( 4.996386 + 62.251426 * t);
        UranusRad0+= 8421.0 * Math.cos ( 5.253507 + 222.860323 * t);
        UranusRad0+= 8402.0 * Math.cos ( 5.038775 + 415.552491 * t);
        UranusRad0+= 7449.0 * Math.cos ( 0.794919 + 351.816592 * t);
        UranusRad0+= 7329.0 * Math.cos ( 3.972775 + 183.242815 * t);
        UranusRad0+= 6046.0 * Math.cos ( 5.679609 + 78.713752 * t);
        UranusRad0+= 5524.0 * Math.cos ( 3.114995 + 9.561228 * t);
        UranusRad0+= 5445.0 * Math.cos ( 5.105756 + 145.109779 * t);
        UranusRad0+= 5238.0 * Math.cos ( 2.629601 + 33.679618 * t);
        UranusRad0+= 4079.0 * Math.cos ( 3.220648 + 340.770892 * t);
        UranusRad0+= 3919.0 * Math.cos ( 4.250153 + 39.617508 * t);
        UranusRad0+= 3802.0 * Math.cos ( 6.109856 + 184.727287 * t);
        UranusRad0+= 3781.0 * Math.cos ( 3.458403 + 456.393839 * t);
        UranusRad0+= 3687.0 * Math.cos ( 2.487181 + 453.424894 * t);
        UranusRad0+= 3102.0 * Math.cos ( 4.140311 + 219.891378 * t);
        UranusRad0+= 2963.0 * Math.cos ( 0.829780 + 56.622351 * t);
        UranusRad0+= 2942.0 * Math.cos ( 0.423938 + 299.126394 * t);
        UranusRad0+= 2940.0 * Math.cos ( 2.146375 + 137.033024 * t);
        UranusRad0+= 2938.0 * Math.cos ( 3.676575 + 140.001970 * t);
        UranusRad0+= 2865.0 * Math.cos ( 0.309969 + 12.530173 * t);
        UranusRad0+= 2538.0 * Math.cos ( 4.854578 + 131.403950 * t);
        UranusRad0+= 2364.0 * Math.cos ( 0.442533 + 554.069987 * t);
        UranusRad0+= 2183.0 * Math.cos ( 2.940404 + 305.346169 * t);

        UranusRad1 = 0;
        UranusRad1+= 1479896.0 * Math.cos ( 3.672057 + 74.781599 * t);
        UranusRad1+= 71212.0 * Math.cos ( 6.226010 + 63.735898 * t);
        UranusRad1+= 68627.0 * Math.cos ( 6.134113 + 149.563197 * t);
        UranusRad1+= 24060.0 * Math.cos ( 3.141593 + 0.000000 * t);
        UranusRad1+= 21468.0 * Math.cos ( 2.601767 + 76.266071 * t);
        UranusRad1+= 20857.0 * Math.cos ( 5.246255 + 11.045700 * t);
        UranusRad1+= 11405.0 * Math.cos ( 0.018485 + 70.849445 * t);
        UranusRad1+= 7497.0 * Math.cos ( 0.423600 + 73.297126 * t);
        UranusRad1+= 4244.0 * Math.cos ( 1.416924 + 85.827299 * t);
        UranusRad1+= 3927.0 * Math.cos ( 3.155140 + 71.812653 * t);
        UranusRad1+= 3578.0 * Math.cos ( 2.311607 + 224.344796 * t);
        UranusRad1+= 3506.0 * Math.cos ( 2.583540 + 138.517497 * t);
        UranusRad1+= 3229.0 * Math.cos ( 5.254996 + 3.932153 * t);
        UranusRad1+= 3060.0 * Math.cos ( 0.153219 + 1.484473 * t);
        UranusRad1+= 2564.0 * Math.cos ( 0.980768 + 148.078724 * t);
        UranusRad1+= 2429.0 * Math.cos ( 3.994401 + 52.690198 * t);
        UranusRad1+= 1645.0 * Math.cos ( 2.653493 + 127.471797 * t);
        UranusRad1+= 1584.0 * Math.cos ( 1.430456 + 78.713752 * t);
        UranusRad1+= 1508.0 * Math.cos ( 5.059963 + 151.047670 * t);
        UranusRad1+= 1490.0 * Math.cos ( 2.675592 + 56.622351 * t);
        UranusRad1+= 1413.0 * Math.cos ( 4.574619 + 202.253395 * t);
        UranusRad1+= 1403.0 * Math.cos ( 1.369854 + 77.750544 * t);
        UranusRad1+= 1228.0 * Math.cos ( 1.047036 + 62.251426 * t);
        UranusRad1+= 1033.0 * Math.cos ( 0.264591 + 131.403950 * t);
        UranusRad1+= 992.0 * Math.cos ( 2.171689 + 65.220371 * t);
        UranusRad1+= 862.0 * Math.cos ( 5.055308 + 351.816592 * t);
        UranusRad1+= 744.0 * Math.cos ( 3.076401 + 35.164090 * t);
        UranusRad1+= 687.0 * Math.cos ( 2.499126 + 77.962992 * t);
        UranusRad1+= 647.0 * Math.cos ( 4.472904 + 70.328180 * t);
        UranusRad1+= 624.0 * Math.cos ( 0.862531 + 9.561228 * t);
        UranusRad1+= 604.0 * Math.cos ( 0.907177 + 984.600332 * t);
        UranusRad1+= 575.0 * Math.cos ( 3.230707 + 447.795820 * t);
        UranusRad1+= 562.0 * Math.cos ( 2.717782 + 462.022914 * t);
        UranusRad1+= 530.0 * Math.cos ( 5.916553 + 213.299095 * t);
        UranusRad1+= 528.0 * Math.cos ( 5.151360 + 2.968945 * t);

        UranusRad2 = 0;
        UranusRad2+= 22440.0 * Math.cos ( 0.699531 + 74.781599 * t);
        UranusRad2+= 4727.0 * Math.cos ( 1.699016 + 63.735898 * t);
        UranusRad2+= 1682.0 * Math.cos ( 4.648336 + 70.849445 * t);
        UranusRad2+= 1650.0 * Math.cos ( 3.096601 + 11.045700 * t);
        UranusRad2+= 1434.0 * Math.cos ( 3.521199 + 149.563197 * t);
        UranusRad2+= 770.0 * Math.cos ( 0.000000 + 0.000000 * t);
        UranusRad2+= 500.0 * Math.cos ( 6.172290 + 76.266071 * t);
        UranusRad2+= 461.0 * Math.cos ( 0.766766 + 3.932153 * t);
        UranusRad2+= 390.0 * Math.cos ( 4.496053 + 56.622351 * t);
        UranusRad2+= 390.0 * Math.cos ( 5.526734 + 85.827299 * t);
        UranusRad2+= 292.0 * Math.cos ( 0.203890 + 52.690198 * t);
        UranusRad2+= 287.0 * Math.cos ( 3.533577 + 73.297126 * t);
        UranusRad2+= 273.0 * Math.cos ( 3.847078 + 138.517497 * t);
        UranusRad2+= 220.0 * Math.cos ( 1.964189 + 131.403950 * t);
        UranusRad2+= 216.0 * Math.cos ( 0.848125 + 77.962992 * t);
        UranusRad2+= 205.0 * Math.cos ( 3.247580 + 78.713752 * t);
        UranusRad2+= 149.0 * Math.cos ( 4.898409 + 127.471797 * t);
        UranusRad2+= 129.0 * Math.cos ( 2.081469 + 3.181394 * t);

        UranusRad3 = 0;
        UranusRad3+= 1164.0 * Math.cos ( 4.734533 + 74.781599 * t);
        UranusRad3+= 212.0 * Math.cos ( 3.342557 + 63.735898 * t);
        UranusRad3+= 196.0 * Math.cos ( 2.980046 + 70.849445 * t);
        UranusRad3+= 105.0 * Math.cos ( 0.958079 + 11.045700 * t);
        UranusRad3+= 73.0 * Math.cos ( 0.997019 + 149.563197 * t);
        UranusRad3+= 72.0 * Math.cos ( 0.025285 + 56.622351 * t);
        UranusRad3+= 55.0 * Math.cos ( 2.594368 + 3.932153 * t);
        UranusRad3+= 36.0 * Math.cos ( 5.650356 + 77.962992 * t);
        UranusRad3+= 34.0 * Math.cos ( 3.815533 + 76.266071 * t);
        UranusRad3+= 32.0 * Math.cos ( 3.598252 + 131.403950 * t);

        UranusRad4 = 0;
        UranusRad4+= 53.0 * Math.cos ( 3.008380 + 74.781599 * t);
        UranusRad4+= 10.0 * Math.cos ( 1.913991 + 56.622351 * t);

        UranusRad5 = 0;

        UranusRad =
        + UranusRad0 * t0
        + UranusRad1 * t1
        + UranusRad2 * t2
        + UranusRad3 * t3
        + UranusRad4 * t4
        + UranusRad5 * t5;

        Rad_T = UranusRad; 
    }


    //Neptune
    if (id00==9) {
        NeptuneLon0 = 0;
        NeptuneLon0+= 531188633.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneLon0+= 1798476.0 * Math.cos ( 2.901013 + 38.133036 * t);
        NeptuneLon0+= 1019728.0 * Math.cos ( 0.485809 + 1.484473 * t);
        NeptuneLon0+= 124532.0 * Math.cos ( 4.830081 + 36.648563 * t);
        NeptuneLon0+= 42064.0 * Math.cos ( 5.410550 + 2.968945 * t);
        NeptuneLon0+= 37715.0 * Math.cos ( 6.092218 + 35.164090 * t);
        NeptuneLon0+= 33785.0 * Math.cos ( 1.244889 + 76.266071 * t);
        NeptuneLon0+= 16483.0 * Math.cos ( 0.000077 + 491.557929 * t);
        NeptuneLon0+= 9199.0 * Math.cos ( 4.937471 + 39.617508 * t);
        NeptuneLon0+= 8994.0 * Math.cos ( 0.274621 + 175.166060 * t);
        NeptuneLon0+= 4216.0 * Math.cos ( 1.987119 + 73.297126 * t);
        NeptuneLon0+= 3365.0 * Math.cos ( 1.035901 + 33.679618 * t);
        NeptuneLon0+= 2285.0 * Math.cos ( 4.206069 + 4.453418 * t);
        NeptuneLon0+= 1434.0 * Math.cos ( 2.783404 + 74.781599 * t);
        NeptuneLon0+= 900.0 * Math.cos ( 2.076067 + 109.945689 * t);
        NeptuneLon0+= 745.0 * Math.cos ( 3.190325 + 71.812653 * t);
        NeptuneLon0+= 506.0 * Math.cos ( 5.747854 + 114.399107 * t);
        NeptuneLon0+= 400.0 * Math.cos ( 0.349723 + 1021.248895 * t);
        NeptuneLon0+= 345.0 * Math.cos ( 3.461862 + 41.101981 * t);
        NeptuneLon0+= 340.0 * Math.cos ( 3.303699 + 77.750544 * t);
        NeptuneLon0+= 323.0 * Math.cos ( 2.248152 + 32.195145 * t);
        NeptuneLon0+= 306.0 * Math.cos ( 0.496840 + 0.521265 * t);
        NeptuneLon0+= 287.0 * Math.cos ( 4.505234 + 0.048184 * t);
        NeptuneLon0+= 282.0 * Math.cos ( 2.245656 + 146.594252 * t);
        NeptuneLon0+= 267.0 * Math.cos ( 4.889326 + 0.963208 * t);
        NeptuneLon0+= 252.0 * Math.cos ( 5.781666 + 388.465155 * t);
        NeptuneLon0+= 245.0 * Math.cos ( 1.246933 + 9.561228 * t);
        NeptuneLon0+= 233.0 * Math.cos ( 2.504598 + 137.033024 * t);
        NeptuneLon0+= 227.0 * Math.cos ( 1.797131 + 453.424894 * t);
        NeptuneLon0+= 170.0 * Math.cos ( 3.323906 + 108.461216 * t);
        NeptuneLon0+= 151.0 * Math.cos ( 2.191531 + 33.940250 * t);
        NeptuneLon0+= 150.0 * Math.cos ( 2.997061 + 5.937891 * t);
        NeptuneLon0+= 148.0 * Math.cos ( 0.859490 + 111.430161 * t);
        NeptuneLon0+= 119.0 * Math.cos ( 3.677062 + 2.447681 * t);
        NeptuneLon0+= 109.0 * Math.cos ( 2.415994 + 183.242815 * t);
        NeptuneLon0+= 103.0 * Math.cos ( 0.040790 + 0.260632 * t);
        NeptuneLon0+= 103.0 * Math.cos ( 4.404412 + 70.328180 * t);
        NeptuneLon0+= 102.0 * Math.cos ( 5.705392 + 0.111875 * t);

        NeptuneLon1 = 0;
        NeptuneLon1+= 3837687717.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneLon1+= 16604.0 * Math.cos ( 4.863191 + 1.484473 * t);
        NeptuneLon1+= 15807.0 * Math.cos ( 2.279235 + 38.133036 * t);
        NeptuneLon1+= 3335.0 * Math.cos ( 3.681997 + 76.266071 * t);
        NeptuneLon1+= 1306.0 * Math.cos ( 3.673208 + 2.968945 * t);
        NeptuneLon1+= 605.0 * Math.cos ( 1.504777 + 35.164090 * t);
        NeptuneLon1+= 179.0 * Math.cos ( 3.453185 + 39.617508 * t);
        NeptuneLon1+= 107.0 * Math.cos ( 2.451261 + 4.453418 * t);
        NeptuneLon1+= 106.0 * Math.cos ( 2.754793 + 33.679618 * t);
        NeptuneLon1+= 73.0 * Math.cos ( 5.487247 + 36.648563 * t);
        NeptuneLon1+= 57.0 * Math.cos ( 1.857676 + 114.399107 * t);
        NeptuneLon1+= 57.0 * Math.cos ( 5.216498 + 0.521265 * t);
        NeptuneLon1+= 35.0 * Math.cos ( 4.516768 + 74.781599 * t);
        NeptuneLon1+= 32.0 * Math.cos ( 5.904115 + 77.750544 * t);
        NeptuneLon1+= 30.0 * Math.cos ( 3.670433 + 388.465155 * t);
        NeptuneLon1+= 29.0 * Math.cos ( 5.168775 + 9.561228 * t);
        NeptuneLon1+= 29.0 * Math.cos ( 5.167326 + 2.447681 * t);
        NeptuneLon1+= 26.0 * Math.cos ( 5.245263 + 168.052513 * t);

        NeptuneLon2 = 0;
        NeptuneLon2+= 53893.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneLon2+= 296.0 * Math.cos ( 1.855203 + 1.484473 * t);
        NeptuneLon2+= 281.0 * Math.cos ( 1.190845 + 38.133036 * t);
        NeptuneLon2+= 270.0 * Math.cos ( 5.721432 + 76.266071 * t);
        NeptuneLon2+= 23.0 * Math.cos ( 1.210356 + 2.968945 * t);
        NeptuneLon2+= 9.0 * Math.cos ( 4.425450 + 35.164090 * t);
        NeptuneLon2+= 7.0 * Math.cos ( 0.540333 + 2.447681 * t);

        NeptuneLon3 = 0;
        NeptuneLon3+= 31.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneLon3+= 15.0 * Math.cos ( 1.353371 + 76.266071 * t);
        NeptuneLon3+= 12.0 * Math.cos ( 6.044314 + 1.484473 * t);
        NeptuneLon3+= 12.0 * Math.cos ( 6.112578 + 38.133036 * t);

        NeptuneLon4 = 0;
        NeptuneLon4+= 114.0 * Math.cos ( 3.141593 + 0.000000 * t);

        NeptuneLon5 = 0;

        NeptuneLon =
        + NeptuneLon0 * t0
        + NeptuneLon1 * t1
        + NeptuneLon2 * t2
        + NeptuneLon3 * t3
        + NeptuneLon4 * t4
        + NeptuneLon5 * t5;

        Lon_T = NeptuneLon; 

        NeptuneLat0 = 0;
        NeptuneLat0+= 3088623.0 * Math.cos ( 1.441044 + 38.133036 * t);
        NeptuneLat0+= 27780.0 * Math.cos ( 5.912719 + 76.266071 * t);
        NeptuneLat0+= 27624.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneLat0+= 15448.0 * Math.cos ( 3.508771 + 39.617508 * t);
        NeptuneLat0+= 15355.0 * Math.cos ( 2.521238 + 36.648563 * t);
        NeptuneLat0+= 2000.0 * Math.cos ( 1.509987 + 74.781599 * t);
        NeptuneLat0+= 1968.0 * Math.cos ( 4.377782 + 1.484473 * t);
        NeptuneLat0+= 1015.0 * Math.cos ( 3.215610 + 35.164090 * t);
        NeptuneLat0+= 606.0 * Math.cos ( 2.802466 + 73.297126 * t);
        NeptuneLat0+= 595.0 * Math.cos ( 2.128927 + 41.101981 * t);
        NeptuneLat0+= 589.0 * Math.cos ( 3.186559 + 2.968945 * t);
        NeptuneLat0+= 402.0 * Math.cos ( 4.168833 + 114.399107 * t);
        NeptuneLat0+= 280.0 * Math.cos ( 1.681653 + 77.750544 * t);
        NeptuneLat0+= 262.0 * Math.cos ( 3.767227 + 213.299095 * t);
        NeptuneLat0+= 254.0 * Math.cos ( 3.271205 + 453.424894 * t);
        NeptuneLat0+= 206.0 * Math.cos ( 4.256523 + 529.690965 * t);
        NeptuneLat0+= 140.0 * Math.cos ( 3.529696 + 137.033024 * t);

        NeptuneLat1 = 0;
        NeptuneLat1+= 227279.0 * Math.cos ( 3.807931 + 38.133036 * t);
        NeptuneLat1+= 1803.0 * Math.cos ( 1.975765 + 76.266071 * t);
        NeptuneLat1+= 1433.0 * Math.cos ( 3.141593 + 0.000000 * t);
        NeptuneLat1+= 1386.0 * Math.cos ( 4.825555 + 36.648563 * t);
        NeptuneLat1+= 1073.0 * Math.cos ( 6.080542 + 39.617508 * t);
        NeptuneLat1+= 148.0 * Math.cos ( 3.857662 + 74.781599 * t);
        NeptuneLat1+= 136.0 * Math.cos ( 0.477650 + 1.484473 * t);
        NeptuneLat1+= 70.0 * Math.cos ( 6.187821 + 35.164090 * t);
        NeptuneLat1+= 52.0 * Math.cos ( 5.052218 + 73.297126 * t);
        NeptuneLat1+= 43.0 * Math.cos ( 0.307217 + 114.399107 * t);
        NeptuneLat1+= 37.0 * Math.cos ( 4.894766 + 41.101981 * t);
        NeptuneLat1+= 37.0 * Math.cos ( 5.759993 + 2.968945 * t);
        NeptuneLat1+= 26.0 * Math.cos ( 5.215663 + 213.299095 * t);

        NeptuneLat2 = 0;
        NeptuneLat2+= 9691.0 * Math.cos ( 5.571237 + 38.133036 * t);
        NeptuneLat2+= 79.0 * Math.cos ( 3.627055 + 76.266071 * t);
        NeptuneLat2+= 72.0 * Math.cos ( 0.454767 + 36.648563 * t);
        NeptuneLat2+= 59.0 * Math.cos ( 3.141593 + 0.000000 * t);
        NeptuneLat2+= 30.0 * Math.cos ( 1.606717 + 39.617508 * t);
        NeptuneLat2+= 6.0 * Math.cos ( 5.607368 + 74.781599 * t);

        NeptuneLat3 = 0;
        NeptuneLat3+= 273.0 * Math.cos ( 1.016890 + 38.133036 * t);
        NeptuneLat3+= 2.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneLat3+= 2.0 * Math.cos ( 2.368057 + 36.648563 * t);
        NeptuneLat3+= 2.0 * Math.cos ( 5.333643 + 76.266071 * t);

        NeptuneLat4 = 0;
        NeptuneLat4+= 6.0 * Math.cos ( 2.668727 + 38.133036 * t);

        NeptuneLat5 = 0;

        NeptuneLat =
        + NeptuneLat0 * t0
        + NeptuneLat1 * t1
        + NeptuneLat2 * t2
        + NeptuneLat3 * t3
        + NeptuneLat4 * t4
        + NeptuneLat5 * t5;

        Lat_T = NeptuneLat; 

        NeptuneRad0 = 0;
        NeptuneRad0+= 3007013206.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneRad0+= 27062259.0 * Math.cos ( 1.329995 + 38.133036 * t);
        NeptuneRad0+= 1691764.0 * Math.cos ( 3.251861 + 36.648563 * t);
        NeptuneRad0+= 807831.0 * Math.cos ( 5.185928 + 1.484473 * t);
        NeptuneRad0+= 537761.0 * Math.cos ( 4.521139 + 35.164090 * t);
        NeptuneRad0+= 495726.0 * Math.cos ( 1.571057 + 491.557929 * t);
        NeptuneRad0+= 274572.0 * Math.cos ( 1.845523 + 175.166060 * t);
        NeptuneRad0+= 135134.0 * Math.cos ( 3.372206 + 39.617508 * t);
        NeptuneRad0+= 121802.0 * Math.cos ( 5.797544 + 76.266071 * t);
        NeptuneRad0+= 100895.0 * Math.cos ( 0.377027 + 73.297126 * t);
        NeptuneRad0+= 69792.0 * Math.cos ( 3.796172 + 2.968945 * t);
        NeptuneRad0+= 46688.0 * Math.cos ( 5.749378 + 33.679618 * t);
        NeptuneRad0+= 24594.0 * Math.cos ( 0.508017 + 109.945689 * t);
        NeptuneRad0+= 16939.0 * Math.cos ( 1.594222 + 71.812653 * t);
        NeptuneRad0+= 14230.0 * Math.cos ( 1.077861 + 74.781599 * t);
        NeptuneRad0+= 12012.0 * Math.cos ( 1.920621 + 1021.248895 * t);
        NeptuneRad0+= 8395.0 * Math.cos ( 0.678169 + 146.594252 * t);
        NeptuneRad0+= 7572.0 * Math.cos ( 1.071493 + 388.465155 * t);
        NeptuneRad0+= 5721.0 * Math.cos ( 2.590595 + 4.453418 * t);
        NeptuneRad0+= 4840.0 * Math.cos ( 1.906860 + 41.101981 * t);
        NeptuneRad0+= 4483.0 * Math.cos ( 2.905735 + 529.690965 * t);
        NeptuneRad0+= 4421.0 * Math.cos ( 1.749938 + 108.461216 * t);
        NeptuneRad0+= 4354.0 * Math.cos ( 0.679857 + 32.195145 * t);
        NeptuneRad0+= 4270.0 * Math.cos ( 3.413439 + 453.424894 * t);
        NeptuneRad0+= 3381.0 * Math.cos ( 0.848107 + 183.242815 * t);
        NeptuneRad0+= 2881.0 * Math.cos ( 1.986001 + 137.033024 * t);
        NeptuneRad0+= 2879.0 * Math.cos ( 3.674159 + 350.332120 * t);
        NeptuneRad0+= 2636.0 * Math.cos ( 3.097559 + 213.299095 * t);
        NeptuneRad0+= 2530.0 * Math.cos ( 5.798396 + 490.073457 * t);
        NeptuneRad0+= 2523.0 * Math.cos ( 0.486308 + 493.042402 * t);
        NeptuneRad0+= 2306.0 * Math.cos ( 2.809629 + 70.328180 * t);
        NeptuneRad0+= 2087.0 * Math.cos ( 0.618584 + 33.940250 * t);

        NeptuneRad1 = 0;
        NeptuneRad1+= 236339.0 * Math.cos ( 0.704980 + 38.133036 * t);
        NeptuneRad1+= 13220.0 * Math.cos ( 3.320155 + 1.484473 * t);
        NeptuneRad1+= 8622.0 * Math.cos ( 6.216290 + 35.164090 * t);
        NeptuneRad1+= 2702.0 * Math.cos ( 1.881407 + 39.617508 * t);
        NeptuneRad1+= 2155.0 * Math.cos ( 2.094312 + 2.968945 * t);
        NeptuneRad1+= 2153.0 * Math.cos ( 5.168738 + 76.266071 * t);
        NeptuneRad1+= 1603.0 * Math.cos ( 0.000000 + 0.000000 * t);
        NeptuneRad1+= 1464.0 * Math.cos ( 1.184170 + 33.679618 * t);
        NeptuneRad1+= 1136.0 * Math.cos ( 3.918912 + 36.648563 * t);
        NeptuneRad1+= 898.0 * Math.cos ( 5.241229 + 388.465155 * t);
        NeptuneRad1+= 790.0 * Math.cos ( 0.533155 + 168.052513 * t);
        NeptuneRad1+= 760.0 * Math.cos ( 0.020510 + 182.279607 * t);
        NeptuneRad1+= 607.0 * Math.cos ( 1.077065 + 1021.248895 * t);
        NeptuneRad1+= 572.0 * Math.cos ( 3.400608 + 484.444382 * t);
        NeptuneRad1+= 561.0 * Math.cos ( 2.886858 + 498.671476 * t);

        NeptuneRad2 = 0;
        NeptuneRad2+= 4247.0 * Math.cos ( 5.899107 + 38.133036 * t);
        NeptuneRad2+= 218.0 * Math.cos ( 0.345818 + 1.484473 * t);
        NeptuneRad2+= 163.0 * Math.cos ( 2.238729 + 168.052513 * t);
        NeptuneRad2+= 156.0 * Math.cos ( 4.594145 + 182.279607 * t);
        NeptuneRad2+= 127.0 * Math.cos ( 2.847863 + 35.164090 * t);

        NeptuneRad3 = 0;
        NeptuneRad3+= 166.0 * Math.cos ( 4.552439 + 38.133036 * t);

        NeptuneRad4 = 0;

        NeptuneRad5 = 0;

        NeptuneRad =
        + NeptuneRad0 * t0
        + NeptuneRad1 * t1
        + NeptuneRad2 * t2
        + NeptuneRad3 * t3
        + NeptuneRad4 * t4
        + NeptuneRad5 * t5;

        Rad_T = NeptuneRad; 
    }

    Lon_T = Lon_T * 1e-8;
    Lat_T = Lat_T * 1e-8;
    Rad_T = Rad_T * 1e-8;

    var CT = (jd00 - 2451545.0)/36525.0;
    var Lon_T_prime=Lon_T - 1.397*CT*dospi360 - 0.00031*CT*CT*dospi360;
    var delta_Lon_T=(-0.09033 + 0.03916*(Math.cos(Lon_T_prime)+Math.sin(Lon_T_prime))*Math.tan(Lat_T))*dospi360/3600.0;
    var delta_Lat_T=(0.03916*(Math.cos(Lon_T_prime)-Math.sin(Lon_T_prime)))*dospi360/3600.0;

    Lon_T=Lon_T+delta_Lon_T;
    Lat_T=Lat_T+delta_Lat_T;

    return [Rad_T,Lon_T,Lat_T];

}