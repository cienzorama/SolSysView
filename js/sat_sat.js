/*
 Programming and DHTML graphics:
 Adrian R. Ashford, Sky & Telescope.
 v3.1 July 14, 2004.

 Parts based on SAMOONS.BAS by Roger Sinnott.

 Date & time validation scripts:
 Sandeep Tamhankar
 stamhankar@hotmail.com
 http://javascript.internet.com
 */
 
/* Run reloaded ever 60 seconds - default */
var interval = setInterval(reloaded, 60000000);
	
/* Use Entered Date, don't update every minute */
function use_Entered_Date() {
	clearInterval(interval);
	return isValidDate(document.saturn.date_txt.value);
}

/*Start updating every minute */

function use_Real_Time() {
	interval = setInterval(reloaded, 60000000);
	reloaded();
}

/*
 Set date and time to current date and time
 */
function grab_UTC()
{
    var nowdate = new Date();
    var utc_day = nowdate.getUTCDate();
    var utc_month = nowdate.getUTCMonth() + 1;
    var utc_year = nowdate.getUTCFullYear();
    zone = nowdate.getTimezoneOffset() / 1440;
    document.saturn.timezone.value = -(zone * 24);
    var utc_hours = nowdate.getUTCHours();
    var utc_mins = nowdate.getUTCMinutes();
    var utc_secs = nowdate.getUTCSeconds();
    utc_mins += utc_secs / 60.0;
    utc_mins = Math.floor((utc_mins + 0.5));
    if (utc_mins < 10) utc_mins = "0" + utc_mins;
    if (utc_mins > 59) utc_mins = 59;
    if (utc_hours < 10) utc_hours = "0" + utc_hours;
    if (utc_month < 10) utc_month = "0" + utc_month;
    if (utc_day < 10) utc_day = "0" + utc_day;
    document.saturn.date_txt.value = utc_month + "/" + utc_day + "/" + utc_year;
    document.saturn.ut_h_m.value = utc_hours + ":" + utc_mins;
}

/*
 todo: Do not know what function does
 */
function setup()
{
    grab_UTC();
    reset_flag = 0;
    view_type = "binocular";
    saturn();
    isBinocular();
}
/*
 todo: Do not know what function does
 */

function reloaded()
{
    grab_UTC();
    saturn();
}

/*
 todo: Do not know what function does
 */
function clear_rings()
{
    saturn_0_layer = 7;
    saturn_1_n_layer = 7;
    saturn_2_n_layer = 7;
    saturn_3_n_layer = 7;
    saturn_5_n_layer = 7;
    saturn_8_n_layer = 7;
    saturn_13_n_layer = 7;
    saturn_18_n_layer = 7;
    saturn_23_n_layer = 7;
    saturn_28_n_layer = 7;
    saturn_1_s_layer = 7;
    saturn_2_s_layer = 7;
    saturn_3_s_layer = 7;
    saturn_5_s_layer = 7;
    saturn_8_s_layer = 7;
    saturn_13_s_layer = 7;
    saturn_18_s_layer = 7;
    saturn_23_s_layer = 7;
    saturn_28_s_layer = 7;
}

/*
 fixme: Dead function
 */
function proper_ang(big)
{
    with (Math)
    {
        var tmp = 0;
        if (big > 0)
        {
            tmp = big / 360.0;
            tmp = (tmp - floor(tmp)) * 360.0;
        }
        else
        {
            tmp = ceil(abs(big / 360.0));
            tmp = big + tmp * 360.0;
        }
    }
    return tmp;
}

/*
 todo: Do not know what function does
 */
function proper_ang_rad(big)
{
    with (Math)
    {
        var tmp = 0;
        if (big > 0)
        {
            tmp = big / 2 / PI;
            tmp = (tmp - floor(tmp)) * 2 * PI;
        }
        else
        {
            tmp = ceil(abs(big / 2 / PI));
            tmp = big + tmp * 2 * PI;
        }
    }
    return tmp;
}

/*
 fixme: dead function
 */
function round_10(num)
{
   return Math.floor((num + 0.05) * 10) / 10;
}

/*
 fixme: dead function
 */
function round_100(num)
{
   return Math.floor((num + 0.005) * 100) / 100;
}


/*
 Valiate and display errors for Date
 */
function isValidDate(dateStr)
{
    if (IsValidTime(document.saturn.ut_h_m.value) == true)
    {
        var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
        var matchArray = dateStr.match(datePat);
        if (matchArray == null) {
            alert("Date is not in a valid format.");
            return false;
        }
        var month = matchArray[1];
        var day = matchArray[3];
        var year = matchArray[4];
        if (year < 1900 || year > 2100) {
            alert("Year must be between 1900 or 2100");
            return false;
        }
        if (day < 1 || day > 31) {
            alert("Day must be between 1 and 31.");
            return false;
        }
        if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
            alert("Month " + month + " doesn't have 31 days!");
            return false
        }
        if (month == 2) {
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (day > 29 || (day == 29 && !isleap))
            {
                alert("February " + year + " doesn't have " + day + " days!");
                return false;
            }
        }
        if (month < 10 && month.length == 1) month = "0" + month;
        if (day < 10 && day.length == 1) day = "0" + day;
        document.saturn.date_txt.value = month + "/" + day + "/" + year;
        var dt_str = document.saturn.date_txt.value;
        if ((dt_str.substring(2,3) != "/") || (dt_str.substring(5,6) != "/"))
        {
            alert ("Date is not in a valid format.");
            return false;
        }
        saturn();
        return true;
    }
    else
    {
        return false;
    }
}

/*
 Validate and display errors for Time
 */
function IsValidTime(timeStr)
{
    var timePat = /^(\d{1,2}):(\d{2})(:(\d{2}))?(\s?(AM|am|PM|pm))?$/;
    var matchArray = timeStr.match(timePat);
    if (matchArray == null)
    {
        alert("Time is not in a valid format.");
        return false;
    }
    var hour = matchArray[1];
    var minute = matchArray[2];
    if (hour < 0 || hour > 23)
    {
        alert("Hour must be between 0 and 23.");
        return false;
    }
    if (minute < 0 || minute > 59)
    {
        alert ("Minute must be between 0 and 59.");
        return false;
    }
    if (hour < 10 && hour.length == 1) hour = "0" + hour;
    if (minute < 10 && minute.length == 1) minute = "0" + minute;
    document.saturn.ut_h_m.value = hour + ":" + minute;
    var tm_str = document.saturn.ut_h_m.value;
    if ((tm_str.substring(2,3) != ":") && (dt_str.length != 5))
    {
        alert ("Time is not in a valid format.");
        return false;
    }
    return true;
}

/*
 Calculate user input time and time
 */
function time_change(tmp)
{
    if (isValidDate(document.saturn.date_txt.value) == true)
    {
        var jd_temp, zz, ff, alpha, aa, bb, cc, dd, ee;
        var calendar_day, calendar_month, calendar_year;
        var int_day, hours, minutes;

        var tm_as_str, ut_hrs, ut_mns, frac_day;

        var jd = julian_date();

        tm_as_str = document.saturn.ut_h_m.value;
        ut_hrs = eval(tm_as_str.substring(0,2));
        ut_mns = eval(tm_as_str.substring(3,5));
        frac_day = ut_hrs / 24.0 + ut_mns / 1440.0;

        with (Math) {

            jd_temp = jd + frac_day + tmp / 24.0 + 0.5;

            zz = floor(jd_temp);
            ff = jd_temp - zz;
            alpha = floor((zz - 1867216.25) / 36524.25);
            aa = zz + 1 + alpha - floor(alpha / 4);
            bb = aa + 1524;
            cc = floor((bb - 122.1) / 365.25);
            dd = floor(365.25 * cc);
            ee = floor((bb - dd) / 30.6001);
            calendar_day = bb - dd - floor(30.6001 * ee) + ff;
            calendar_month = ee;
            if (ee < 13.5) calendar_month = ee - 1;
            if (ee > 13.5) calendar_month = ee - 13;
            calendar_year = cc;
            if (calendar_month > 2.5) calendar_year = cc - 4716;
            if (calendar_month < 2.5) calendar_year = cc - 4715;
            int_day = floor(calendar_day);
            hours = (calendar_day - int_day) * 24;
            minutes = floor((hours - floor(hours)) * 60 + 0.5);
            hours = floor(hours);
            if (minutes > 59)
            {minutes = 0; hours = hours + 1;}
            if (calendar_month < 10) calendar_month = "0" + calendar_month;
            if (int_day < 10) int_day = "0" + int_day;
            if (hours < 10) hours = "0" + floor(hours);
            if (minutes < 10) minutes = "0" + minutes;
        }
        document.saturn.date_txt.value = calendar_month + "/" + int_day + "/" + calendar_year;
        document.saturn.ut_h_m.value = hours + ":" + minutes;
        saturn();
        return true;
    }
    else
    {
        return false;
    }
}

/*
 Calculate Julian Date
 */
function julian_date()
{
    var dt_as_str, mm, dd, yy;
    var  a, b;

    dt_as_str = document.saturn.date_txt.value;
    mm = eval(dt_as_str.substring(0,2));
    dd = eval(dt_as_str.substring(3,5));
    yy = eval(dt_as_str.substring(6,10));

    with (Math) {
        var yyy=yy;
        var mmm=mm;
        if (mm < 3)
        {
            yyy = yy - 1;
            mmm = mm + 12;
        }
        a = floor(yyy/100);
        b = 2 - a + floor(a/4);

        return floor(365.25*yyy) + floor(30.6001*(mmm+1)) + dd + 1720994.5 + b;
    }
}

/*
 todo: Do not know what function does
 */
function isReflector()
{
    if (isValidDate(document.saturn.date_txt.value) == true)
    {
        view_type = "reflector";
        reset_flag = 1;
        if (document.all)
        {
            document.all.direct.style.zIndex = -1;
            document.all.inverted.style.zIndex = 20;
            document.all.mirrored.style.zIndex = -1;
        }
        else
        {
            if (document.layers)
            {
                document.layers["direct"].zIndex = -1;
                document.layers["inverted"].zIndex = 20;
                document.layers["mirrored"].zIndex = -1;
            }
            else
            {
                if (document.getElementById)
                {
                    document.getElementById("direct").style.zIndex = -1;
                    document.getElementById("inverted").style.zIndex = 20;
                    document.getElementById("mirrored").style.zIndex = -1;
                    document.getElementById("inverted-btn").style.background = "darkgrey";
                    document.getElementById("mirrored-btn").style.background = "transparent";
                    document.getElementById("direct-btn").style.background = "transparent";
                }
            }
        }
        saturn();
        return true;
    }
    else
    {
        return false;
    }
}

/*
 todo: Do not know what function does
 */
function isRefractor()
{
    if (isValidDate(document.saturn.date_txt.value) == true)
    {
        view_type = "refractor";
        reset_flag = 1;
        if (document.all)
        {
            document.all.direct.style.zIndex = -1;
            document.all.inverted.style.zIndex = -1;
            document.all.mirrored.style.zIndex = 20;
        }
        else
        {
            if (document.layers)
            {
                document.layers["direct"].zIndex = -1;
                document.layers["inverted"].zIndex = -1;
                document.layers["mirrored"].zIndex = 20;
            }
            else
            {
                if (document.getElementById)
                {
                    document.getElementById("direct").style.zIndex = -1;
                    document.getElementById("inverted").style.zIndex = -1;
                    document.getElementById("mirrored").style.zIndex = 20;
                    document.getElementById("mirrored-btn").style.background = "darkgrey";
                    document.getElementById("inverted-btn").style.background = "transparent";
                    document.getElementById("direct-btn").style.background = "transparent";
                }
            }
        }
        saturn();
        return true;
    }
    else
    {
        return false;
    }
}


/*
 todo: Do not know what function does
 */
function isBinocular()
{
    if (isValidDate(document.saturn.date_txt.value) == true)
    {
        view_type = "binocular";
        reset_flag = 1;
        if (document.all)
        {
            document.all.direct.style.zIndex = 20;
            document.all.inverted.style.zIndex = -1;
            document.all.mirrored.style.zIndex = -1;
        }
        else
        {
            if (document.layers)
            {
                document.layers["direct"].zIndex = 20;
                document.layers["inverted"].zIndex = -1;
                document.layers["mirrored"].zIndex = -1;
            }
            else
            {
                if (document.getElementById)
                {
                    document.getElementById("direct").style.zIndex = 20;
                    document.getElementById("inverted").style.zIndex = -1;
                    document.getElementById("mirrored").style.zIndex = -1;
                    document.getElementById("direct-btn").style.background = "darkgrey";
                    document.getElementById("inverted-btn").style.background = "transparent";
                    document.getElementById("mirrored-btn").style.background = "transparent";
                }
            }
        }
        saturn();
        return true;
    }
    else
    {
        return false;
    }
}

/*
 Calculate position of saturns moon's
 */
function saturn()
{

    with (Math)
    {
        var dt = 65;
        var RAD = 180 / PI;
        var scale_fact = 7.0537;

        clear_rings();

        var jd = julian_date();

        var tm_as_str = document.saturn.ut_h_m.value;
        var ut_hrs = eval(tm_as_str.substring(0,2));
        var ut_mns = eval(tm_as_str.substring(3,5));
        var frac_day = ut_hrs / 24.0 + ut_mns / 1440.0;
        var temp = jd + frac_day + dt / 86400;

        var T = (temp - 2415020.0) / 36525;
        var T1 = T - floor(T);

        var E0 = 0.01675;
        var M0 = (358.47583 + 36000 * T1 - 0.95025 * T) / RAD;
        var C0 = 2 * E0 * sin(M0) + 1.25 * E0 * E0 * sin(2 * M0);
        var L0 = (99.697 + 36000 * T1 + 0.76892 * T) / RAD + C0;
        var E8 = (23.452294 - 0.0130125 * T) / RAD;

        var E6 = 0.05589;
        var M6 = (175.46622 + 1080 * T1 + 141.55147 * T) / RAD;
        var C6 = 2 * E6 * sin(M6) + 1.25 * E6 * E6 * sin(2 * M6);
        var L6 = (266.564 + 1080 * T1 + 143.509884 * T) / RAD + C6;
        var A6 = 9.554747;
        var B6 = 2.49 / RAD * sin(L6 - (112.79 + 0.87 * T) / RAD);

        L0 = proper_ang_rad(L0);
        L6 = proper_ang_rad(L6);

        var K = L0 - L6;
        var D1 = sqrt(A6 * A6 + 1 - 2 * A6 * cos(K));
        var P2 = sin(K) / D1;
        var P2 = atan(P2 / sqrt(1 - P2 * P2));
        var L3 = L6 - P2;
        var B3 = B6 * A6 / D1;
        var Q1 = sin(L3) * cos(E8) - sin(B3) * sin(E8) / cos(B3);
        var Q2 = cos(L3);
        var A4 = atan2(Q1,Q2);
        var D4 = sin(B3) * cos(E8) + cos(B3) * sin(E8) * sin(L3);
        var D4 = atan(D4 / sqrt(1 - D4 * D4));
        var LT = D1 / (173 * 36525);

        var I6 = 28.08 / RAD;
        var N6 = (168.12 + 1.4 * T) / RAD;
        var J6 = cos(I6) * cos(E8) - sin(I6) * sin(E8) * cos(N6);
        J6 = atan(sqrt(1 - J6 * J6) / J6);
        var D7 = cos(I6) * sin(E8) + sin(I6) * cos(E8) * cos(N6);
        var N7 = atan(sin(I6) * sin(N6) / D7) + PI;
        D7 = sin(I6) * cos(E8) + cos(I6) * sin(E8) * cos(N6);
        var W6 = atan(sin(E8) * sin(N6) / D7);
        var B6 = sin(J6) * cos(D4) * sin(A4 - N7) - cos(J6) * sin(D4);
        B6 = atan(B6 / sqrt(1 - B6 * B6));
        var U6 = cos(J6) * cos(D4) * sin(A4 - N7) + sin(J6) * sin(D4);
        var U7 = cos(D4) * cos(A4 - N7);
        U6 = atan2(U6,U7);
        var X1 = 2.35;

        var X0 = 1.56;



        var de = B6 * RAD;
        var rings = abs(de);

        var TA = T1 - LT;
        var TB = T - LT;
        var O2 = (187.76 + 9596160 * TA + 124.126763 * TB) / RAD;
        var O3 = (355.32 + 6964920 * TA + 322.62375 * TB) / RAD;
        var O4 = (191.71 + 4804200 * TA + 114.885173 * TB) / RAD;
        var O5 = (101.37 + 2910600 * TA + 80.467853 * TB) / RAD;
     var O6 = (271.66 + 824400 * TA + 225.475797 * TB) / RAD;

        O2 = proper_ang_rad(O2 - N6 + W6);
        O3 = proper_ang_rad(O3 - N6 + W6);
        O4 = proper_ang_rad(O4 - N6 + W6);
        O5 = proper_ang_rad(O5 - N6 + W6);
        O6 = proper_ang_rad(O6 - N6 + W6);

        var X2 = (4.1 * sin(O2 - U6)) * scale_fact;
        var Y2 = (4.1 * sin(B6) * cos(O2 - U6)) * scale_fact;
        var X3 = (5.08 * sin(O3 - U6)) * scale_fact;
        var Y3 = (5.08 * sin(B6) * cos(O3 - U6)) * scale_fact;
        var X4 = (6.51 * sin(O4 - U6)) * scale_fact;
        var Y4 = (6.51 * sin(B6) * cos(O4 - U6)) * scale_fact;
        var X5 = (9.09 * sin(O5 - U6)) * scale_fact;
        var Y5 = (9.09 * sin(B6) * cos(O5 - U6)) * scale_fact;
        var X6 = (21.1 * sin(O6 - U6)) * scale_fact;
        var Y6 = (21.1 * sin(B6) * cos(O6 - U6)) * scale_fact;

        var enceladus_ang = proper_ang_rad(O2 - U6 + PI);
        var tethys_ang = proper_ang_rad(O3 - U6 + PI);
        var dione_ang = proper_ang_rad(O4 - U6 + PI);
        var rhea_ang = proper_ang_rad(O5 - U6 + PI);
        var titan_ang = proper_ang_rad(O6 - U6 + PI);

        var x_enceladus = - X2;
        var y_enceladus = - Y2;
        var enceladus_layer = 11;
        if ((1.571 < enceladus_ang) && (enceladus_ang < 4.712)) enceladus_layer = 9;

        var x_tethys = - X3;
        var y_tethys = - Y3;
        var tethys_layer = 11;
        if ((1.571 < tethys_ang) && (tethys_ang < 4.712)) tethys_layer = 9;

        var x_dione = - X4;
        var y_dione = - Y4;
        var dione_layer = 11;
        if ((1.571 < dione_ang) && (dione_ang < 4.712)) dione_layer = 9;

        var x_rhea = - X5;
        var y_rhea = - Y5;
        var rhea_layer = 11;
        if ((1.571 < rhea_ang) && (rhea_ang < 4.712)) rhea_layer = 9;

        var x_titan = - X6 * 0.95;
        var y_titan = - Y6 * 0.95;
        var titan_layer = 11;
        if ((1.571 < titan_ang) && (titan_ang < 4.712)) titan_layer = 9;

        if (rings < 0.5)
        {
            saturn_0_layer = 10;
        }

        if ((de > 0 && (view_type == "binocular" || view_type == "refractor")) || (de < 0 && view_type == "reflector"))
        {
            if ((rings >= 0.5) && (rings < 1.5))
            {
                saturn_1_n_layer = 10;
            }
            if ((rings >= 1.5) && (rings < 2.5))
            {
                saturn_2_n_layer = 10;
            }
            if ((rings >= 2.5) && (rings < 4.0))
            {
                saturn_3_n_layer = 10;
            }
            if ((rings >= 4.0) && (rings < 6.5))
            {
                saturn_5_n_layer = 10;
            }
            if ((rings >= 6.5) && (rings < 10.5))
            {
                saturn_8_n_layer = 10;
            }
            if ((rings >= 10.5) && (rings < 15.5))
            {
                saturn_13_n_layer = 10;
            }
            if ((rings >= 15.5) && (rings < 20.5))
            {
                saturn_18_n_layer = 10;
            }
            if ((rings >= 20.5) && (rings < 25.5))
            {
                saturn_23_n_layer = 10;
            }
            if ((rings >= 25.5) && (rings < 30))
            {
                saturn_28_n_layer = 10;
            }
        }
        else
        {
            if ((rings >= 0.5) && (rings < 1.5))
            {
                saturn_1_s_layer = 10;
            }
            if ((rings >= 1.5) && (rings < 2.5))
            {
                saturn_2_s_layer = 10;
            }
            if ((rings >= 2.5) && (rings < 4.0))
            {
                saturn_3_s_layer = 10;
            }
            if ((rings >= 4.0) && (rings < 6.5))
            {
                saturn_5_s_layer = 10;
            }
            if ((rings >= 6.5) && (rings < 10.5))
            {
                saturn_8_s_layer = 10;
            }
            if ((rings >= 10.5) && (rings < 15.5))
            {
                saturn_13_s_layer = 10;
            }
            if ((rings >= 15.5) && (rings < 20.5))
            {
                saturn_18_s_layer = 10;
            }
            if ((rings >= 20.5) && (rings < 25.5))
            {
                saturn_23_s_layer = 10;
            }
            if ((rings >= 25.5) && (rings < 30))
            {
                saturn_28_s_layer = 10;
            }
        }

        if (document.all)
        {
            document.all.saturn0.style.zIndex = saturn_0_layer;
            document.all.saturn1n.style.zIndex = saturn_1_n_layer;
            document.all.saturn2n.style.zIndex = saturn_2_n_layer;
            document.all.saturn3n.style.zIndex = saturn_3_n_layer;
            document.all.saturn5n.style.zIndex = saturn_5_n_layer;
            document.all.saturn8n.style.zIndex = saturn_8_n_layer;
            document.all.saturn13n.style.zIndex = saturn_13_n_layer;
            document.all.saturn18n.style.zIndex = saturn_18_n_layer;
            document.all.saturn23n.style.zIndex = saturn_23_n_layer;
            document.all.saturn28n.style.zIndex = saturn_28_n_layer;
            document.all.saturn1s.style.zIndex = saturn_1_s_layer;
            document.all.saturn2s.style.zIndex = saturn_2_s_layer;
            document.all.saturn3s.style.zIndex = saturn_3_s_layer;
            document.all.saturn5s.style.zIndex = saturn_5_s_layer;
            document.all.saturn8s.style.zIndex = saturn_8_s_layer;
            document.all.saturn13s.style.zIndex = saturn_13_s_layer;
            document.all.saturn18s.style.zIndex = saturn_18_s_layer;
            document.all.saturn23s.style.zIndex = saturn_23_s_layer;
            document.all.saturn28s.style.zIndex = saturn_28_s_layer;
        }
        else
        {
            if (document.layers)
            {
                document.layers["saturn0"].zIndex = saturn_0_layer;
                document.layers["saturn1n"].zIndex = saturn_1_n_layer;
                document.layers["saturn2n"].zIndex = saturn_2_n_layer;
                document.layers["saturn3n"].zIndex = saturn_3_n_layer;
                document.layers["saturn5n"].zIndex = saturn_5_n_layer;
                document.layers["saturn8n"].zIndex = saturn_8_n_layer;
                document.layers["saturn13n"].zIndex = saturn_13_n_layer;
                document.layers["saturn18n"].zIndex = saturn_18_n_layer;
                document.layers["saturn23n"].zIndex = saturn_23_n_layer;
                document.layers["saturn28n"].zIndex = saturn_28_n_layer;
                document.layers["saturn1s"].zIndex = saturn_1_s_layer;
                document.layers["saturn2s"].zIndex = saturn_2_s_layer;
                document.layers["saturn3s"].zIndex = saturn_3_s_layer;
                document.layers["saturn5s"].zIndex = saturn_5_s_layer;
                document.layers["saturn8s"].zIndex = saturn_8_s_layer;
                document.layers["saturn13s"].zIndex = saturn_13_s_layer;
                document.layers["saturn18s"].zIndex = saturn_18_s_layer;
                document.layers["saturn23s"].zIndex = saturn_23_s_layer;
                document.layers["saturn28s"].zIndex = saturn_28_s_layer;
            }
            else
            {
                if (document.getElementById)
                {
                    document.getElementById("saturn0").style.zIndex = saturn_0_layer;
                    document.getElementById("saturn1n").style.zIndex = saturn_1_n_layer;
                    document.getElementById("saturn2n").style.zIndex = saturn_2_n_layer;
                    document.getElementById("saturn3n").style.zIndex = saturn_3_n_layer;
                    document.getElementById("saturn5n").style.zIndex = saturn_5_n_layer;
                    document.getElementById("saturn8n").style.zIndex = saturn_8_n_layer;
                    document.getElementById("saturn13n").style.zIndex = saturn_13_n_layer;
                    document.getElementById("saturn18n").style.zIndex = saturn_18_n_layer;
                    document.getElementById("saturn23n").style.zIndex = saturn_23_n_layer;
                    document.getElementById("saturn28n").style.zIndex = saturn_28_n_layer;
                    document.getElementById("saturn1s").style.zIndex = saturn_1_s_layer;
                    document.getElementById("saturn2s").style.zIndex = saturn_2_s_layer;
                    document.getElementById("saturn3s").style.zIndex = saturn_3_s_layer;
                    document.getElementById("saturn5s").style.zIndex = saturn_5_s_layer;
                    document.getElementById("saturn8s").style.zIndex = saturn_8_s_layer;
                    document.getElementById("saturn13s").style.zIndex = saturn_13_s_layer;
                    document.getElementById("saturn18s").style.zIndex = saturn_18_s_layer;
                    document.getElementById("saturn23s").style.zIndex = saturn_23_s_layer;
                    document.getElementById("saturn28s").style.zIndex = saturn_28_s_layer;
                }
            }
        }

        if (reset_flag == 0)
        {
            if (document.all)
            {
                document.all.chooseit.style.zIndex = 21;
            }
            else
            {
                if (document.layers)
                {
                    document.layers["chooseit"].zIndex = 21;
                }
                else
                {
                    if (document.getElementById)
                    {
                        document.getElementById("chooseit").style.zIndex = 21;
                    }
                }
            }
        }
        else
        {
            if (document.all)
            {
                document.all.chooseit.style.zIndex = 1;
            }
            else
            {
                if (document.layers)
                {
                    document.layers["chooseit"].zIndex = 1;
                }
                else
                {
                    if (document.getElementById)
                    {
                        document.getElementById("chooseit").style.zIndex = 1;
                    }
                }
            }
        }

        if (view_type == "reflector")
        {
            x_enceladus = 408 - x_enceladus - 3;
            y_enceladus = 151 - y_enceladus - 1;
            x_tethys = 408 - x_tethys - 3;
            y_tethys = 151 - y_tethys - 1;
            x_dione = 408 - x_dione - 3;
            y_dione = 151 - y_dione - 1;
            x_rhea = 408 - x_rhea - 3;
            y_rhea = 151 - y_rhea - 1;
            x_titan = 408 - x_titan - 3;
            y_titan = 151 - y_titan - 1;

            if (document.all)
            {
                document.all.moonenceladus.style.pixelLeft = x_enceladus;
                document.all.moonenceladus.style.pixelTop = y_enceladus;
                document.all.moonenceladus.style.zIndex = enceladus_layer;
                document.all.moontethys.style.pixelLeft = x_tethys;
                document.all.moontethys.style.pixelTop = y_tethys;
                document.all.moontethys.style.zIndex = tethys_layer;
                document.all.moondione.style.pixelLeft = x_dione;
                document.all.moondione.style.pixelTop = y_dione;
                document.all.moondione.style.zIndex = dione_layer;
                document.all.moonrhea.style.pixelLeft = x_rhea;
                document.all.moonrhea.style.pixelTop = y_rhea;
                document.all.moonrhea.style.zIndex = rhea_layer;
                document.all.moontitan.style.pixelLeft = x_titan;
                document.all.moontitan.style.pixelTop = y_titan;
                document.all.moontitan.style.zIndex = titan_layer;
            }
            else
            {
                if (document.layers)
                {
                    document.layers["moonenceladus"].left = x_enceladus;
                    document.layers["moonenceladus"].top = y_enceladus;
                    document.layers["moonenceladus"].zIndex = enceladus_layer;
                    document.layers["moontethys"].left = x_tethys;
                    document.layers["moontethys"].top = y_tethys;
                    document.layers["moontethys"].zIndex = tethys_layer;
                    document.layers["moondione"].left = x_dione;
                    document.layers["moondione"].top = y_dione;
                    document.layers["moondione"].zIndex = dione_layer;
                    document.layers["moonrhea"].left = x_rhea;
                    document.layers["moonrhea"].top = y_rhea;
                    document.layers["moonrhea"].zIndex = rhea_layer;
                    document.layers["moontitan"].left = x_titan;
                    document.layers["moontitan"].top = y_titan;
                    document.layers["moontitan"].zIndex = titan_layer;
                }
                else
                {
                    if (document.getElementById)
                    {
                        document.getElementById("moonenceladus").style.left = x_enceladus;
                        document.getElementById("moonenceladus").style.top = y_enceladus;
                        document.getElementById("moonenceladus").style.zIndex = enceladus_layer;
                        document.getElementById("moontethys").style.left = x_tethys;
                        document.getElementById("moontethys").style.top = y_tethys;
                        document.getElementById("moontethys").style.zIndex = tethys_layer;
                        document.getElementById("moondione").style.left = x_dione;
                        document.getElementById("moondione").style.top = y_dione;
                        document.getElementById("moondione").style.zIndex = dione_layer;
                        document.getElementById("moonrhea").style.left = x_rhea;
                        document.getElementById("moonrhea").style.top = y_rhea;
                        document.getElementById("moonrhea").style.zIndex = rhea_layer;
                        document.getElementById("moontitan").style.left = x_titan;
                        document.getElementById("moontitan").style.top = y_titan;
                        document.getElementById("moontitan").style.zIndex = titan_layer;
                    }
                }
            }
        }

        if (view_type == "refractor")
        {
            x_enceladus = 408 - x_enceladus - 3;
            y_enceladus = 151 + y_enceladus - 1;
            x_tethys = 408 - x_tethys - 3;
            y_tethys = 151 + y_tethys - 1;
            x_dione = 408 - x_dione - 3;
            y_dione = 151 + y_dione - 1;
            x_rhea = 408 - x_rhea - 3;
            y_rhea = 151 + y_rhea - 1;
            x_titan = 408 - x_titan - 3;
            y_titan = 151 + y_titan - 1;

            if (document.all)
            {
                document.all.moonenceladus.style.pixelLeft = x_enceladus;
                document.all.moonenceladus.style.pixelTop = y_enceladus;
                document.all.moonenceladus.style.zIndex = enceladus_layer;
                document.all.moontethys.style.pixelLeft = x_tethys;
                document.all.moontethys.style.pixelTop = y_tethys;
                document.all.moontethys.style.zIndex = tethys_layer;
                document.all.moondione.style.pixelLeft = x_dione;
                document.all.moondione.style.pixelTop = y_dione;
                document.all.moondione.style.zIndex = dione_layer;
                document.all.moonrhea.style.pixelLeft = x_rhea;
                document.all.moonrhea.style.pixelTop = y_rhea;
                document.all.moonrhea.style.zIndex = rhea_layer;
                document.all.moontitan.style.pixelLeft = x_titan;
                document.all.moontitan.style.pixelTop = y_titan;
                document.all.moontitan.style.zIndex = titan_layer;
            }
            else
            {
                if (document.layers)
                {
                    document.layers["moonenceladus"].left = x_enceladus;
                    document.layers["moonenceladus"].top = y_enceladus;
                    document.layers["moonenceladus"].zIndex = enceladus_layer;
                    document.layers["moontethys"].left = x_tethys;
                    document.layers["moontethys"].top = y_tethys;
                    document.layers["moontethys"].zIndex = tethys_layer;
                    document.layers["moondione"].left = x_dione;
                    document.layers["moondione"].top = y_dione;
                    document.layers["moondione"].zIndex = dione_layer;
                    document.layers["moonrhea"].left = x_rhea;
                    document.layers["moonrhea"].top = y_rhea;
                    document.layers["moonrhea"].zIndex = rhea_layer;
                    document.layers["moontitan"].left = x_titan;
                    document.layers["moontitan"].top = y_titan;
                    document.layers["moontitan"].zIndex = titan_layer;
                }
                else
                {
                    if (document.getElementById)
                    {
                        document.getElementById("moonenceladus").style.left = x_enceladus;
                        document.getElementById("moonenceladus").style.top = y_enceladus;
                        document.getElementById("moonenceladus").style.zIndex = enceladus_layer;
                        document.getElementById("moontethys").style.left = x_tethys;
                        document.getElementById("moontethys").style.top = y_tethys;
                        document.getElementById("moontethys").style.zIndex = tethys_layer;
                        document.getElementById("moondione").style.left = x_dione;
                        document.getElementById("moondione").style.top = y_dione;
                        document.getElementById("moondione").style.zIndex = dione_layer;
                        document.getElementById("moonrhea").style.left = x_rhea;
                        document.getElementById("moonrhea").style.top = y_rhea;
                        document.getElementById("moonrhea").style.zIndex = rhea_layer;
                        document.getElementById("moontitan").style.left = x_titan;
                        document.getElementById("moontitan").style.top = y_titan;
                        document.getElementById("moontitan").style.zIndex = titan_layer;
                    }
                }
            }
        }

        if (view_type == "binocular")
        {
            x_enceladus = 408 + x_enceladus - 3;
            y_enceladus = 151 + y_enceladus - 1;
            x_tethys = 408 + x_tethys - 3;
            y_tethys = 151 + y_tethys - 1;
            x_dione = 408 + x_dione - 3;
            y_dione = 151 + y_dione - 1;
            x_rhea = 408 + x_rhea - 3;
            y_rhea = 151 + y_rhea - 1;
            x_titan = 408 + x_titan - 3;
            y_titan = 151 + y_titan - 1;

            if (document.all)
            {
                document.all.moonenceladus.style.pixelLeft = x_enceladus;
                document.all.moonenceladus.style.pixelTop = y_enceladus;
                document.all.moonenceladus.style.zIndex = enceladus_layer;
                document.all.moontethys.style.pixelLeft = x_tethys;
                document.all.moontethys.style.pixelTop = y_tethys;
                document.all.moontethys.style.zIndex = tethys_layer;
                document.all.moondione.style.pixelLeft = x_dione;
                document.all.moondione.style.pixelTop = y_dione;
                document.all.moondione.style.zIndex = dione_layer;
                document.all.moonrhea.style.pixelLeft = x_rhea;
                document.all.moonrhea.style.pixelTop = y_rhea;
                document.all.moonrhea.style.zIndex = rhea_layer;
                document.all.moontitan.style.pixelLeft = x_titan;
                document.all.moontitan.style.pixelTop = y_titan;
                document.all.moontitan.style.zIndex = titan_layer;
            }
            else
            {
                if (document.layers)
                {
                    document.layers["moonenceladus"].left = x_enceladus;
                    document.layers["moonenceladus"].top = y_enceladus;
                    document.layers["moonenceladus"].zIndex = enceladus_layer;
                    document.layers["moontethys"].left = x_tethys;
                    document.layers["moontethys"].top = y_tethys;
                    document.layers["moontethys"].zIndex = tethys_layer;
                    document.layers["moondione"].left = x_dione;
                    document.layers["moondione"].top = y_dione;
                    document.layers["moondione"].zIndex = dione_layer;
                    document.layers["moonrhea"].left = x_rhea;
                    document.layers["moonrhea"].top = y_rhea;
                    document.layers["moonrhea"].zIndex = rhea_layer;
                    document.layers["moontitan"].left = x_titan;
                    document.layers["moontitan"].top = y_titan;
                    document.layers["moontitan"].zIndex = titan_layer;
                }
                else
                {
                    if (document.getElementById)
                    {
                        document.getElementById("moonenceladus").style.left = x_enceladus;
                        document.getElementById("moonenceladus").style.top = y_enceladus;
                        document.getElementById("moonenceladus").style.zIndex = enceladus_layer;
                        document.getElementById("moontethys").style.left = x_tethys;
                        document.getElementById("moontethys").style.top = y_tethys;
                        document.getElementById("moontethys").style.zIndex = tethys_layer;
                        document.getElementById("moondione").style.left = x_dione;
                        document.getElementById("moondione").style.top = y_dione;
                        document.getElementById("moondione").style.zIndex = dione_layer;
                        document.getElementById("moonrhea").style.left = x_rhea;
                        document.getElementById("moonrhea").style.top = y_rhea;
                        document.getElementById("moonrhea").style.zIndex = rhea_layer;
                        document.getElementById("moontitan").style.left = x_titan;
                        document.getElementById("moontitan").style.top = y_titan;
                        document.getElementById("moontitan").style.zIndex = titan_layer;
                    }
                }
            }
        }

    }
}
