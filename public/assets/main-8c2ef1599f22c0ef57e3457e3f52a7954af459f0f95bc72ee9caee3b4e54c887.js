


var app = angular.module('app', ['ngResource', 'ngRoute', 'ngSanitize', 'ngDragDrop', 'ui.bootstrap']);

app.factory('get_words', ['$resource', function ($resource) {
    return $resource('/main/get_words');
}]);

app.factory('save_words', ['$resource', function ($resource) {
    return $resource('/main/save_words');
}]);
app.controller("MasterCtrl", ['$scope', 'get_words', 'save_words', function ($scope, get_words, save_words) {
    $scope.japanesetext = [
        "あ", "か", "さ", "た", "な", "は", "ま", "や", "ゃ", "ら", "わ", "が", "ざ", "だ", "ば", "ぱ",
        "い", "き", "し", "ち", "に", "ひ", "み", "り", "ぎ", "じ", "ぢ", "び", "ぴ",
        "う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "ゅ", "る", "ぐ", "ず", "づ", "ぶ", "ぷ",
        "え", "け", "せ", "て", "ね", "へ", "め", "れ", "げ", "ぜ", "で", "べ", "ぺ",
        "お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ょ", "ろ", "を", "ご", "ぞ", "ど", "ぼ", "ぽ",
        "ゔ", "っ", "ん", "、", "。",

        "か", "さ", "た", "な", "は", "ま", "や", "ゃ", "ら", "わ", "が", "ざ", "だ", "ば", "ぱ",
        "き", "し", "ち", "に", "ひ", "み", "り", "ぎ", "じ", "ぢ", "び", "ぴ",
        "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "ゅ", "る", "ぐ", "ず", "づ", "ぶ", "ぷ",
        "け", "せ", "て", "ね", "へ", "め", "れ", "げ", "ぜ", "で", "べ", "ぺ",
        "こ", "そ", "と", "の", "ほ", "も", "よ", "ょ", "ろ", "を", "ご", "ぞ", "ど", "ぼ", "ぽ",

        "ア", "ァ", "カ", "サ", "タ", "ナ", "ハ", "マ", "ヤ", "ャ", "ラ", "ワ", "ガ", "ザ", "ダ", "バ", "パ",
        "イ", "ィ", "キ", "シ", "チ", "ニ", "ヒ", "ミ", "リ", "ギ", "ジ", "ヂ", "ビ", "ピ",
        "ウ", "ゥ", "ク", "ス", "ツ", "ヌ", "フ", "ム", "ユ", "ュ", "ル", "グ", "ズ", "ヅ", "ブ", "プ",
        "エ", "ェ", "ケ", "セ", "テ", "ネ", "ヘ", "メ", "レ", "ゲ", "ゼ", "デ", "ベ", "ペ",
        "オ", "ォ", "コ", "ソ", "ト", "ノ", "ホ", "モ", "ヨ", "ョ", "ロ", "ヲ", "ゴ", "ゾ", "ド", "ボ", "ポ",
        "ヴ", "ッ", "ン", "・", "ー", "ヽ", "ヾ", ";"];

    $scope.backtoenglish = [
        "a", "ka", "sa", "ta", "na", "ha", "ma", "ya", "«ya", "ra", "wa", "ga", "za", "da", "ba", "pa",
        "i", "ki", "shi", "chi", "ni", "hi", "mi", "ri", "gi", "ji", "ji", "bi", "pi",
        "u", "ku", "su", "tsu", "nu", "fu", "mu", "yu", "«yu", "ru", "gu", "zu", "zu", "bu", "pu",
        "e", "ke", "se", "te", "ne", "he", "me", "re", "ge", "ze", "de", "be", "pe",
        "o", "ko", "so", "to", "no", "ho", "mo", "yo", "«yo", "ro", "wo", "go", "zo", "do", "bo", "po",
        "v,", "»", "n,", ",", ".,",

        "Ka", "Sa", "Ta", "Na", "Ha", "Ma", "Ya", " Ya", "Ra", "Wa", "Ga", "Za", "Da", "Ba", "Pa",
        "Ki", "Shi", "Chi", "Ni", "Hi", "Mi", "Ri", "Gi", "Ji", " Ji", "Bi", "Pi",
        "Ku", "Su", "Tsu", "Nu", "Fu", "Mu", "Yu", " Yu", "Ru", "Gu", "Zu", " Zu", "Bu", "Pu",
        "Ke", "Se", "Te", "Ne", "He", "Me", "Re", "Ge", "Ze", "De", "Be", "Pe",
        "Ko", "So", "To", "No", "Ho", "Mo", "Yo", " Yo", "Ro", "Wo", "Go", "Zo", "Do", "Bo", "Po",

        "A", "«A", "KA", "SA", "TA", "NA", "HA", "MA", "YA", "«YA", "RA", "WA", "GA", "ZA", "DA", "BA", "PA",
        "I", "«I", "KI", "SHI", "CHI", "NI", "HI", "MI", "RI", "GI", "JI", "JI", "BI", "PI",
        "U", "«U", "KU", "SU", "TSU", "NU", "FU", "MU", "YU", "«YU", "RU", "GU", "ZU", "ZI", "BU", "PU",
        "E", "«E", "KE", "SE", "TE", "NE", "HE", "ME", "RE", "GE", "ZE", "DE", "BE", "PE",
        "O", "«O", "KO", "SO", "TO", "NO", "HO", "MO", "YO", "«YO", "RO", "WO", "GO", "ZO", "DO", "BO", "PO",
        "V,", "»", "N,", "=,", "-,", "[,", "],", ";,"];

    $scope.englishtext = [
        "a", "ka", "sa", "ta", "na", "ha", "ma", "ya", " ya", "ra", "wa", "ga", "za", "da", "ba", "pa",
        "i", "ki", "shi", "chi", "ni", "hi", "mi", "ri", "gi", "ji", " ji", "bi", "pi",
        "u", "ku", "su", "tsu", "nu", "fu", "mu", "yu", " yu", "ru", "gu", "zu", " zu", "bu", "pu",
        "e", "ke", "se", "te", "ne", "he", "me", "re", "ge", "ze", "de", "be", "pe",
        "o", "ko", "so", "to", "no", "ho", "mo", "yo", " yo", "ro", "wo", "go", "zo", "do", "bo", "po",
        "v", "q", " n", ",", ".",

        "Ka", "Sa", "Ta", "Na", "Ha", "Ma", "Ya", " Ya", "Ra", "Wa", "Ga", "Za", "Da", "Ba", "Pa",
        "Ki", "Shi", "Chi", "Ni", "Hi", "Mi", "Ri", "Gi", "Ji", " Ji", "Bi", "Pi",
        "Ku", "Su", "Tsu", "Nu", "Fu", "Mu", "Yu", " Yu", "Ru", "Gu", "Zu", " Zu", "Bu", "Pu",
        "Ke", "Se", "Te", "Ne", "He", "Me", "Re", "Ge", "Ze", "De", "Be", "Pe",
        "Ko", "So", "To", "No", "Ho", "Mo", "Yo", " Yo", "Ro", "Wo", "Go", "Zo", "Do", "Bo", "Po",

        "A", " A", "KA", "SA", "TA", "NA", "HA", "MA", "YA", " YA", "RA", "WA", "GA", "ZA", "DA", "BA", "PA",
        "I", " I", "KI", "SHI", "CHI", "NI", "HI", "MI", "RI", "GI", "JI", " JI", "BI", "PI",
        "U", " U", "KU", "SU", "TSU", "NU", "FU", "MU", "YU", " YU", "RU", "GU", "ZU", " ZI", "BU", "PU",
        "E", " E", "KE", "SE", "TE", "NE", "HE", "ME", "RE", "GE", "ZE", "DE", "BE", "PE",
        "O", " O", "KO", "SO", "TO", "NO", "HO", "MO", "YO", " YO", "RO", "WO", "GO", "ZO", "DO", "BO", "PO",
        "V", "Q", " N", "=", "-", "[", "]", ";"];

    $scope.images = [];
    $scope.previous = ['japaneseToEnglish.png','englishToJapanese.png',
                       'pickLists.png','editLists.png'];
    $scope.assets = ['japaneseToEnglishOver.png','englishToJapaneseOver.png',
                     'pickListsOver.png','editListsOver.png'];
    $scope.lists = [];
    $scope.picks = [];
    $scope.thisPick = 0;
    $scope.pickList = 0;
    $scope.defaultWords = [];
    $scope.theseWords = '';
    $scope.usedWords = [0];
    $scope.currentList = 0;
    $scope.cards = [];
    $scope.answer = '';
    $scope.curAnswers = [];

    $scope.toEnglish = function(kana)
    {
        for (var i in $scope.japanesetext)
        {
            var regex = new RegExp($scope.japanesetext[i],"g");
            kana = kana.replace(regex, $scope.backtoenglish[i].toLowerCase());
        }
        var eraseLast = kana.split('«');
        var rebuild = '';
        for (var i = 0; i < eraseLast.length; i++)
        {
            if (i < (eraseLast.length-1))
            {
                rebuild += eraseLast[i].slice(0,-1);
            }
            else
            {
                rebuild += eraseLast[i];
            }
        }
        var doubleUp = rebuild.split('»');
        var finalize = '';
        for (var i in doubleUp)
        {
            finalize += (i == 0 ? '' : doubleUp[i].charAt(0)) + doubleUp[i];
        }

        finalize = finalize.replace(/a/g, 'a,');
        finalize = finalize.replace(/e/g, 'e,');
        finalize = finalize.replace(/i/g, 'i,');
        finalize = finalize.replace(/o/g, 'o,');
        finalize = finalize.replace(/u/g, 'u,');

        return finalize;
    };

    $scope.game = function()
    {
        $('#menu').fadeOut(500);
        $scope.cards = [];
        get_words.get({list:$scope.thisPick}, function(resp)
        {
            $scope.defaultWords = resp.words;
            for (var i in $scope.defaultWords)
            {
                $scope.cards.push({english:$scope.defaultWords[i][0], japanese:$scope.defaultWords[i][1]});
            }

            $scope.cards.sort(function() {
                return .5 - Math.random();
            });

            $scope.curAnswers = [$scope.cards[0].japanese, $scope.cards[0].english,
                $scope.commatose($scope.cards[0].english)];

            $('#top').html($scope.cards[0].japanese);
            $('#thisBoxer').get(0).focus();
        });
        $('#game').fadeIn(500);
    };

    $scope.flip = function()
    {
        $('#menu').fadeOut(500);
        $scope.cards = [];
        get_words.get({list:$scope.thisPick}, function(resp)
        {
            $scope.defaultWords = resp.words;
            for (var i in $scope.defaultWords)
            {
                $scope.cards.push({english:$scope.defaultWords[i][0], japanese:$scope.defaultWords[i][1]});
            }

            $scope.cards.sort(function() {
                return .5 - Math.random();
            });

            $scope.curAnswers = [$scope.cards[0].english, $scope.cards[0].japanese,
                $scope.toEnglish($scope.cards[0].japanese)];

            $('#top2').html($scope.cards[0].english);
            $('#thisBoxer2').get(0).focus();
        });
        $('#flip').fadeIn(500);
    };

    $scope.listPick = function()
    {
        $('#menu').fadeOut(500);
        $('#listPick').fadeIn(500);
    };

    $scope.menu = function()
    {
        $('#game').fadeOut(500);
        $('#flip').fadeOut(500);
        $('#listPick').fadeOut(500);
        $('#edit').fadeOut(500);
        $('#menu').fadeIn(500);
    };

    $scope.edit = function()
    {
        $('#menu').fadeOut(500);
        $('#listEdit').fadeOut(500);
        $('#edit').fadeIn(500);
    };

    $scope.save = function()
    {
      save_words.save({list:$scope.currentList,words:$scope.defaultWords}, function(resp){
        $scope.edit();
      });
    };

    $scope.commatose = function(word)
    {
        var commatized = '';
        for (var i = 0; i < word.length; i++)
        {
            commatized += word.charAt(i) + ',';
        }
        return commatized.toLowerCase();
    };

    $scope.listEdit = function()
    {
        $('#menu').fadeOut(500);
        $('#edit').fadeOut(500);
        $scope.currentList = parseInt($('#ListTitles').find('option:selected').val()) + 1;
        get_words.get({list:$scope.currentList - 1}, function(resp)
        {
            $scope.defaultWords = resp.words;

            $('#English').val('');
            $('#Japanese').val('');
            $scope.theseWords = '';
            if ($scope.defaultWords.length > 0)
            {
                $('#English').val($scope.defaultWords[0][0]);
                $('#Japanese').val($scope.defaultWords[0][1]);
                $scope.theseWords = $scope.defaultWords[0][1];
            }
        });
        $('#listEdit').fadeIn(500);
    };

    $scope.fireItUp = function(event, index)
    {
        $(event.target).attr('src','../assets/' + $scope.assets[index]);
    };

    $scope.douseIt = function(event, index)
    {
        $(event.target).attr('src','../assets/' + $scope.previous[index]);
    };

    $scope.transcribe = function (e) {
        if (e.keyCode || e.which) {
            setBoxes(e);
        }
    };

    function setBoxes(e) {
        var lower = $("#Japanese").val();
        var count = lower.length;
        var clean = "";
        var dirty = "";
        var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ,.=-[];"
        for (var i = 0; i < count; i++) {
            if (letters.indexOf(lower[i]) >= 0) {
                clean += lower[i];
            }
            else {
                dirty += lower[i];
            }
        }
        for (var i = 0; i < $scope.englishtext.length; i++) {
            if (clean == $scope.englishtext[i]) {
                $("#Japanese").val($("#Japanese").val().replace(clean, $scope.japanesetext[i]));
            }
        }
        $scope.setWord(e);
    }

    $scope.addWord = function()
    {
        var word = 1;
        while ($scope.usedWords.indexOf(word) >= 0)
        word++;
        $scope.usedWords.push(word);
        $scope.defaultWords.push(['New Word ' + word,'あたらし ことば ' + word]);
        $scope.theseWords = 'あたらし ことば ' + word;
        $('#English').val('');
        $('#Japanese').val('');
        $('#English').focus();


        $('#listWords').find("option:last").attr("selected", true);
        $("#English").get(0).focus();
        setTimeout(function()
        {
            $('#listWords').scrollTop(9999);
        },100);
    };

    $scope.setWord = function(event)
    {
        var data = $('#listWords').find('option:selected');
        var index = parseInt(data.attr('value'));
        $scope.defaultWords[index][0] = $('#English').val();
        $scope.defaultWords[index][1] = $('#Japanese').val();
        $scope.theseWords = $('#Japanese').val();
        $(event.target).focus();
        if (event.keyCode == 13)
        {
            if ($(event.target).attr('id') == 'Japanese')
            {
                $scope.addWord();
            }
            else
            {
                $('#Japanese').focus();
            }
        }
    };

    $scope.remove = function()
    {
        var data = $('#listWords').find('option:selected');
        var index = parseInt(data.attr('value'));
        var y = $scope.defaultWords;
        y = jQuery.grep(y, function(value)
        {
            return value != $scope.defaultWords[index];
        });
        $scope.defaultWords = y;
        if (index > 0)
        {
            $('#English').val($scope.defaultWords[index - 1][0]);
            $('#Japanese').val($scope.defaultWords[index - 1][1]);
            $scope.theseWords = $scope.defaultWords[index - 1][1];
        }
        else if ($('#listWords').find('option').length > 1)
        {
            $('#English').val($scope.defaultWords[index][0]);
            $('#Japanese').val($scope.defaultWords[index][1]);
            $scope.theseWords = $scope.defaultWords[index][1];
        }
        else
        {
            $('#English').val('');
            $('#Japanese').val('');
            $scope.theseWords = '';
        }
    };

    $scope.fillBoxes = function()
    {
        var data = $('#listWords').find('option:selected');
        var index = parseInt(data.attr('value'));
        $('#English').val($scope.defaultWords[index][0]);
        $('#Japanese').val($scope.defaultWords[index][1]);
    };

    $scope.lastChild = 'ω';

    $scope.gameButton = function(event, two)
    {
        $scope.thisChild = $($('.boxes' + two).find('input').get(0));

        while (" '/".indexOf($scope.thisChild.val().charAt(0)) >= 0)
        {
            $scope.thisChild.attr('value',$scope.thisChild.attr('value').substr(1));
            $scope.thisChild = $($('.boxes' + two).find('input').get(0));
            if ($scope.thisChild.val().charAt(0) == ',')
            {
                $scope.answer += $scope.thisChild.attr('id').charAt(0);
                $scope.thisChild.attr('id',$scope.thisChild.attr('id').substr(1));
                $scope.thisChild.attr('value', $scope.thisChild.attr('value').substr(1));
            }
        }

        if (($scope.thisChild.val().charCodeAt(0) == (event.keyCode + 32)) ||
            $scope.thisChild.val().charAt(0) == '-' && $scope.lastChild.charCodeAt(0) == (event.keyCode + 32))
        {
            $scope.lastChild = $scope.thisChild.val().charAt(0);
            $scope.thisChild.attr('value',$scope.thisChild.attr('value').substr(1));
            $scope.thisChild = $($('.boxes' + two).find('input').get(0));
            if ($scope.thisChild.val().charAt(0) == ',')
            {
                $scope.answer += $scope.thisChild.attr('id').charAt(0);
                $scope.thisChild.attr('id',$scope.thisChild.attr('id').substr(1));
                $scope.thisChild.attr('value',$scope.thisChild.attr('value').substr(1));

                var skips = "ゃゅょァィゥェォッ";
                if (skips.indexOf($scope.thisChild.attr('id').charAt(0)) >= 0)
                {
                    $scope.answer += $scope.thisChild.attr('id').charAt(0);
                    $scope.thisChild.attr('id',$scope.thisChild.attr('id').substr(1));
                }

            }
        }
        if ($scope.thisChild.val().length == 0)
        {
            $scope.thisChild.parent().css('background-color','white');
            $scope.thisChild.remove();
            $('#shown' + two).css('color','green');
            setTimeout(function ()
            {
                var nextQuestion = $($('.boxes' + two).find('input').get(0)).attr('class');
                if (!nextQuestion)
                {
                    alert('Congratulations! You have completed this list!');
                    $('#shown').html('');
                    $('#shown2').html('');
                    $scope.answer = '';
                    $scope.menu();
                }
                else
                {
                    var brother = $($('.boxes' + two).find('input').get(0));
                    $scope.curAnswers = [brother.attr('id'),brother.attr('class'),brother.attr('value')];
                    $('#shown' + two).css('color','white');
                    $scope.answer = '';
                    $('#shown' + two).html('');
                    $('#top' + two).html(nextQuestion);
                }
            }, 2000);
        }

        if (event.keyCode == 27)
        {
            $scope.answer += $scope.thisChild.attr('id');
            $('#shown' + two).css('color','darkred');
            $('#shown' + two).css('font-weight','700');
            setTimeout(function()
            {
                $scope.thisChild.attr('id',$scope.curAnswers[0]);
                $scope.thisChild.attr('class',$scope.curAnswers[1]);
                $scope.thisChild.attr('value',$scope.curAnswers[2]);

                $($($scope.thisChild.parent()).parent()).append($($scope.thisChild.parent()));
                var brother = $($('.boxes' + two).find('input').get(0));
                $scope.curAnswers = [brother.attr('id'),brother.attr('class'),brother.attr('value')];
                $('#shown' + two).css('color','white');
                $('#shown' + two).css('font-weight','500');
                $scope.answer = '';
                $('#shown' + two).html('');
                $('#top' + two).html($(brother).attr('class'));
            }, 2000)

        }
    };

$scope.setSelectColor = function (){
    $('option').css('background', 'none');
    $('option:selected').css('background-color', 'white');
    $('option:focus').css('background-color', 'white');
    };

angular.element(document).ready(function() {
    for (var i = 0; i < 5; i++)
    {
        $scope.lists.push(['List ' + (i + 1), i]);
    }
    $scope.picks = $scope.lists;

    for (var i in $scope.assets)
    {
        $scope.images[i] = new Image();
        $scope.images[i].src = '../assets/' + $scope.assets[i];
    }
});
}]);
