function calculateSum() {

		// Получаем значение даты рождения
		var birthdate1 = document.getElementById('birthdate1').value;
		var birthmonth1 = document.getElementById('birthmonth1').value;
		var birthyear1 = document.getElementById('birthyear1').value;

		// Получаем значение даты рождения
		var calcyear = document.getElementById('calcyear1').value;

		let pimg = [];
		pimg[0] = '';
		pimg[1] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266903dc8ff1c73776b4f_optimized.webp';
		pimg[2] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668b9c327343ef95bf8d_optimized.webp';
		pimg[3] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226692cbcc01377cb1f9aa_optimized.webp';
		pimg[4] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266923dc8ff1c73776b6e_optimized.webp';
		pimg[5] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226699cbcc01377cb1f9e2_optimized.webp';
		pimg[6] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266939c327343ef95bfc8_optimized.webp';
		pimg[7] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266958b4abbcdca113a0b_optimized.webp';
		pimg[8] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226694cbcc01377cb1f9ca_optimized.webp';
		pimg[9] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266953dc8ff1c73776b84_optimized.webp';
		pimg[10] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266953dc8ff1c73776b8c_optimized.webp';
		pimg[11] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266869c327343ef95bf5b_optimized.webp';
		pimg[12] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266878b4abbcdca113999_optimized.webp';
		pimg[13] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226687cbcc01377cb1f957_optimized.webp';
		pimg[14] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266879c327343ef95bf61_optimized.webp';
		pimg[15] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226687cbcc01377cb1f94b_optimized.webp';
		pimg[16] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266862dc243710eb3466e_optimized.webp';
		pimg[17] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266872dc243710eb34681_optimized.webp';
		pimg[18] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266928b4abbcdca1139ef_optimized.webp';
		pimg[19] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668ccbcc01377cb1f980_optimized.webp';
		pimg[20] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668d3dc8ff1c73776b22_optimized.webp';
		pimg[21] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668b8b4abbcdca1139b6_optimized.webp';
		pimg[22] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668e2dc243710eb346aa_optimized.webp';

		var yearsum = 0;
		for (var i = 0; i < calcyear.length; i++) {
			yearsum += parseInt(calcyear[i]); };

		var birthyearsum = 0;
		for (var i = 0; i < birthyear1.length; i++) {
			birthyearsum += parseInt(birthyear1[i]); };

		// =========== MONTH 1

		// [1] Месяц года
		rm01c01 = 1;

		// [2] Сумма цифр года
		rm01c02 = yearsum;
		while ( rm01c02 > 22 ) { rm01c02 = rm01c02 - 22 };

		// [3]
		rm01c03 = rm01c01 + rm01c02
		if ( rm01c03 == 0 ) { rm01c03 = 22 };
		while ( rm01c03 > 22 ) { rm01c03 = rm01c03 - 22 };

		// [4]
		rm01c04 = 1 + parseInt(birthmonth1);
		while ( rm01c04 > 22 ) { rm01c04 = rm01c04 - 22 };

		// [5]
		rm01c05 = birthyearsum + yearsum;
		while ( rm01c05 > 22 ) { rm01c05 = rm01c05 - 22 };

		// [6]
		rm01c06 = rm01c04 + rm01c05
		if ( rm01c06 == 0 ) { rm01c06 = 22 };
		while ( rm01c06 > 22 ) { rm01c06 = rm01c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m01r1').textContent = convertToRoman(rm01c01);
			document.getElementById('m01a01').textContent = convertToSub(rm01c01);
			document.getElementById('m01i01').src = pimg[rm01c01];

		document.getElementById('m01r2').textContent = convertToRoman(rm01c02);
			document.getElementById('m01a02').textContent = convertToSub(rm01c02);
			document.getElementById('m01i02').src = pimg[rm01c02];

		document.getElementById('m01r3').textContent = convertToRoman(rm01c03);
			document.getElementById('m01a03').textContent = convertToSub(rm01c03);
			document.getElementById('m01i03').src = pimg[rm01c03];

		document.getElementById('m01r4').textContent = convertToRoman(rm01c04);
			document.getElementById('m01a04').textContent = convertToSub(rm01c04);
			document.getElementById('m01i04').src = pimg[rm01c04];

		document.getElementById('m01r5').textContent = convertToRoman(rm01c05);
			document.getElementById('m01a05').textContent = convertToSub(rm01c05);
			document.getElementById('m01i05').src = pimg[rm01c05];

		document.getElementById('m01r6').textContent = convertToRoman(rm01c06);
			document.getElementById('m01a06').textContent = convertToSub(rm01c06);
			document.getElementById('m01i06').src = pimg[rm01c06];


		// =========== MONTH 2

		// [1] Месяц года
		rm02c01 = 2;

		// [2] Сумма цифр года
		rm02c02 = yearsum;
		while ( rm02c02 > 22 ) { rm02c02 = rm02c02 - 22 };

		// [3]
		rm02c03 = rm02c01 + rm02c02
		if ( rm02c03 == 0 ) { rm02c03 = 22 };
		while ( rm02c03 > 22 ) { rm02c03 = rm02c03 - 22 };

		// [4]
		rm02c04 = 2 + parseInt(birthmonth1);
		while ( rm02c04 > 22 ) { rm02c04 = rm02c04 - 22 };

		// [5]
		rm02c05 = birthyearsum + yearsum;
		while ( rm02c05 > 22 ) { rm02c05 = rm02c05 - 22 };

		// [6]
		rm02c06 = rm02c04 + rm02c05
		if ( rm02c06 == 0 ) { rm02c06 = 22 };
		while ( rm02c06 > 22 ) { rm02c06 = rm02c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m02r1').textContent = convertToRoman(rm02c01);
			document.getElementById('m02a01').textContent = convertToSub(rm02c01);
			document.getElementById('m02i01').src = pimg[rm02c01];

		document.getElementById('m02r2').textContent = convertToRoman(rm02c02);
			document.getElementById('m02a02').textContent = convertToSub(rm02c02);
			document.getElementById('m02i02').src = pimg[rm02c02];

		document.getElementById('m02r3').textContent = convertToRoman(rm02c03);
			document.getElementById('m02a03').textContent = convertToSub(rm02c03);
			document.getElementById('m02i03').src = pimg[rm02c03];

		document.getElementById('m02r4').textContent = convertToRoman(rm02c04);
			document.getElementById('m02a04').textContent = convertToSub(rm02c04);
			document.getElementById('m02i04').src = pimg[rm02c04];

		document.getElementById('m02r5').textContent = convertToRoman(rm02c05);
			document.getElementById('m02a05').textContent = convertToSub(rm02c05);
			document.getElementById('m02i05').src = pimg[rm02c05];

		document.getElementById('m02r6').textContent = convertToRoman(rm02c06);
			document.getElementById('m02a06').textContent = convertToSub(rm02c06);
			document.getElementById('m02i06').src = pimg[rm02c06];


		// =========== MONTH 3

		// [1] Месяц года
		rm03c01 = 3;

		// [2] Сумма цифр года
		rm03c02 = yearsum;
		while ( rm03c02 > 22 ) { rm03c02 = rm03c02 - 22 };

		// [3]
		rm03c03 = rm03c01 + rm03c02
		if ( rm03c03 == 0 ) { rm03c03 = 22 };
		while ( rm03c03 > 22 ) { rm03c03 = rm03c03 - 22 };

		// [4]
		rm03c04 = 3 + parseInt(birthmonth1);
		while ( rm03c04 > 22 ) { rm03c04 = rm03c04 - 22 };

		// [5]
		rm03c05 = birthyearsum + yearsum;
		while ( rm03c05 > 22 ) { rm03c05 = rm03c05 - 22 };

		// [6]
		rm03c06 = rm03c04 + rm03c05
		if ( rm03c06 == 0 ) { rm03c06 = 22 };
		while ( rm03c06 > 22 ) { rm03c06 = rm03c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m03r1').textContent = convertToRoman(rm03c01);
			document.getElementById('m03a01').textContent = convertToSub(rm03c01);
			document.getElementById('m03i01').src = pimg[rm03c01];

		document.getElementById('m03r2').textContent = convertToRoman(rm03c02);
			document.getElementById('m03a02').textContent = convertToSub(rm03c02);
			document.getElementById('m03i02').src = pimg[rm03c02];

		document.getElementById('m03r3').textContent = convertToRoman(rm03c03);
			document.getElementById('m03a03').textContent = convertToSub(rm03c03);
			document.getElementById('m03i03').src = pimg[rm03c03];

		document.getElementById('m03r4').textContent = convertToRoman(rm03c04);
			document.getElementById('m03a04').textContent = convertToSub(rm03c04);
			document.getElementById('m03i04').src = pimg[rm03c04];

		document.getElementById('m03r5').textContent = convertToRoman(rm03c05);
			document.getElementById('m03a05').textContent = convertToSub(rm03c05);
			document.getElementById('m03i05').src = pimg[rm03c05];

		document.getElementById('m03r6').textContent = convertToRoman(rm03c06);
			document.getElementById('m03a06').textContent = convertToSub(rm03c06);
			document.getElementById('m03i06').src = pimg[rm03c06];


		// =========== MONTH 4

		// [1] Месяц года
		rm04c01 = 4;

		// [2] Сумма цифр года
		rm04c02 = yearsum;
		while ( rm04c02 > 22 ) { rm04c02 = rm04c02 - 22 };

		// [3]
		rm04c03 = rm04c01 + rm04c02
		if ( rm04c03 == 0 ) { rm04c03 = 22 };
		while ( rm04c03 > 22 ) { rm04c03 = rm04c03 - 22 };

		// [4]
		rm04c04 = 4 + parseInt(birthmonth1);
		while ( rm04c04 > 22 ) { rm04c04 = rm04c04 - 22 };

		// [5]
		rm04c05 = birthyearsum + yearsum;
		while ( rm04c05 > 22 ) { rm04c05 = rm04c05 - 22 };

		// [6]
		rm04c06 = rm04c04 + rm04c05
		if ( rm04c06 == 0 ) { rm04c06 = 22 };
		while ( rm04c06 > 22 ) { rm04c06 = rm04c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m04r1').textContent = convertToRoman(rm04c01);
			document.getElementById('m04a01').textContent = convertToSub(rm04c01);
			document.getElementById('m04i01').src = pimg[rm04c01];

		document.getElementById('m04r2').textContent = convertToRoman(rm04c02);
			document.getElementById('m04a02').textContent = convertToSub(rm04c02);
			document.getElementById('m04i02').src = pimg[rm04c02];

		document.getElementById('m04r3').textContent = convertToRoman(rm04c03);
			document.getElementById('m04a03').textContent = convertToSub(rm04c03);
			document.getElementById('m04i03').src = pimg[rm04c03];

		document.getElementById('m04r4').textContent = convertToRoman(rm04c04);
			document.getElementById('m04a04').textContent = convertToSub(rm04c04);
			document.getElementById('m04i04').src = pimg[rm04c04];

		document.getElementById('m04r5').textContent = convertToRoman(rm04c05);
			document.getElementById('m04a05').textContent = convertToSub(rm04c05);
			document.getElementById('m04i05').src = pimg[rm04c05];

		document.getElementById('m04r6').textContent = convertToRoman(rm04c06);
			document.getElementById('m04a06').textContent = convertToSub(rm04c06);
			document.getElementById('m04i06').src = pimg[rm04c06];


		// =========== MONTH 5

		// [1] Месяц года
		rm05c01 = 5;

		// [2] Сумма цифр года
		rm05c02 = yearsum;
		while ( rm05c02 > 22 ) { rm05c02 = rm05c02 - 22 };

		// [3]
		rm05c03 = rm05c01 + rm05c02
		if ( rm05c03 == 0 ) { rm05c03 = 22 };
		while ( rm05c03 > 22 ) { rm05c03 = rm05c03 - 22 };

		// [4]
		rm05c04 = 5 + parseInt(birthmonth1);
		while ( rm05c04 > 22 ) { rm05c04 = rm05c04 - 22 };

		// [5]
		rm05c05 = birthyearsum + yearsum;
		while ( rm05c05 > 22 ) { rm05c05 = rm05c05 - 22 };

		// [6]
		rm05c06 = rm05c04 + rm05c05
		if ( rm05c06 == 0 ) { rm05c06 = 22 };
		while ( rm05c06 > 22 ) { rm05c06 = rm05c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m05r1').textContent = convertToRoman(rm05c01);
			document.getElementById('m05a01').textContent = convertToSub(rm05c01);
			document.getElementById('m05i01').src = pimg[rm05c01];

		document.getElementById('m05r2').textContent = convertToRoman(rm05c02);
			document.getElementById('m05a02').textContent = convertToSub(rm05c02);
			document.getElementById('m05i02').src = pimg[rm05c02];

		document.getElementById('m05r3').textContent = convertToRoman(rm05c03);
			document.getElementById('m05a03').textContent = convertToSub(rm05c03);
			document.getElementById('m05i03').src = pimg[rm05c03];

		document.getElementById('m05r4').textContent = convertToRoman(rm05c04);
			document.getElementById('m05a04').textContent = convertToSub(rm05c04);
			document.getElementById('m05i04').src = pimg[rm05c04];

		document.getElementById('m05r5').textContent = convertToRoman(rm05c05);
			document.getElementById('m05a05').textContent = convertToSub(rm05c05);
			document.getElementById('m05i05').src = pimg[rm05c05];

		document.getElementById('m05r6').textContent = convertToRoman(rm05c06);
			document.getElementById('m05a06').textContent = convertToSub(rm05c06);
			document.getElementById('m05i06').src = pimg[rm05c06];


		// =========== MONTH 6

		// [1] Месяц года
		rm06c01 = 6;

		// [2] Сумма цифр года
		rm06c02 = yearsum;
		while ( rm06c02 > 22 ) { rm06c02 = rm06c02 - 22 };

		// [3]
		rm06c03 = rm06c01 + rm06c02
		if ( rm06c03 == 0 ) { rm06c03 = 22 };
		while ( rm06c03 > 22 ) { rm06c03 = rm06c03 - 22 };

		// [4]
		rm06c04 = 6 + parseInt(birthmonth1);
		while ( rm06c04 > 22 ) { rm06c04 = rm06c04 - 22 };

		// [5]
		rm06c05 = birthyearsum + yearsum;
		while ( rm06c05 > 22 ) { rm06c05 = rm06c05 - 22 };

		// [6]
		rm06c06 = rm06c04 + rm06c05
		if ( rm06c06 == 0 ) { rm06c06 = 22 };
		while ( rm06c06 > 22 ) { rm06c06 = rm06c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m06r1').textContent = convertToRoman(rm06c01);
			document.getElementById('m06a01').textContent = convertToSub(rm06c01);
			document.getElementById('m06i01').src = pimg[rm06c01];

		document.getElementById('m06r2').textContent = convertToRoman(rm06c02);
			document.getElementById('m06a02').textContent = convertToSub(rm06c02);
			document.getElementById('m06i02').src = pimg[rm06c02];

		document.getElementById('m06r3').textContent = convertToRoman(rm06c03);
			document.getElementById('m06a03').textContent = convertToSub(rm06c03);
			document.getElementById('m06i03').src = pimg[rm06c03];

		document.getElementById('m06r4').textContent = convertToRoman(rm06c04);
			document.getElementById('m06a04').textContent = convertToSub(rm06c04);
			document.getElementById('m06i04').src = pimg[rm06c04];

		document.getElementById('m06r5').textContent = convertToRoman(rm06c05);
			document.getElementById('m06a05').textContent = convertToSub(rm06c05);
			document.getElementById('m06i05').src = pimg[rm06c05];

		document.getElementById('m06r6').textContent = convertToRoman(rm06c06);
			document.getElementById('m06a06').textContent = convertToSub(rm06c06);
			document.getElementById('m06i06').src = pimg[rm06c06];


		// =========== MONTH 7

		// [1] Месяц года
		rm07c01 = 7;

		// [2] Сумма цифр года
		rm07c02 = yearsum;
		while ( rm07c02 > 22 ) { rm07c02 = rm07c02 - 22 };

		// [3]
		rm07c03 = rm07c01 + rm07c02
		if ( rm07c03 == 0 ) { rm07c03 = 22 };
		while ( rm07c03 > 22 ) { rm07c03 = rm07c03 - 22 };

		// [4]
		rm07c04 = 7 + parseInt(birthmonth1);
		while ( rm07c04 > 22 ) { rm07c04 = rm07c04 - 22 };

		// [5]
		rm07c05 = birthyearsum + yearsum;
		while ( rm07c05 > 22 ) { rm07c05 = rm07c05 - 22 };

		// [6]
		rm07c06 = rm07c04 + rm07c05
		if ( rm07c06 == 0 ) { rm07c06 = 22 };
		while ( rm07c06 > 22 ) { rm07c06 = rm07c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m07r1').textContent = convertToRoman(rm07c01);
			document.getElementById('m07a01').textContent = convertToSub(rm07c01);
			document.getElementById('m07i01').src = pimg[rm07c01];

		document.getElementById('m07r2').textContent = convertToRoman(rm07c02);
			document.getElementById('m07a02').textContent = convertToSub(rm07c02);
			document.getElementById('m07i02').src = pimg[rm07c02];

		document.getElementById('m07r3').textContent = convertToRoman(rm07c03);
			document.getElementById('m07a03').textContent = convertToSub(rm07c03);
			document.getElementById('m07i03').src = pimg[rm07c03];

		document.getElementById('m07r4').textContent = convertToRoman(rm07c04);
			document.getElementById('m07a04').textContent = convertToSub(rm07c04);
			document.getElementById('m07i04').src = pimg[rm07c04];

		document.getElementById('m07r5').textContent = convertToRoman(rm07c05);
			document.getElementById('m07a05').textContent = convertToSub(rm07c05);
			document.getElementById('m07i05').src = pimg[rm07c05];

		document.getElementById('m07r6').textContent = convertToRoman(rm07c06);
			document.getElementById('m07a06').textContent = convertToSub(rm07c06);
			document.getElementById('m07i06').src = pimg[rm07c06];


		// =========== MONTH 8

		// [1] Месяц года
		rm08c01 = 8;

		// [2] Сумма цифр года
		rm08c02 = yearsum;
		while ( rm08c02 > 22 ) { rm08c02 = rm08c02 - 22 };

		// [3]
		rm08c03 = rm08c01 + rm08c02
		if ( rm08c03 == 0 ) { rm08c03 = 22 };
		while ( rm08c03 > 22 ) { rm08c03 = rm08c03 - 22 };

		// [4]
		rm08c04 = 8 + parseInt(birthmonth1);
		while ( rm08c04 > 22 ) { rm08c04 = rm08c04 - 22 };

		// [5]
		rm08c05 = birthyearsum + yearsum;
		while ( rm08c05 > 22 ) { rm08c05 = rm08c05 - 22 };

		// [6]
		rm08c06 = rm08c04 + rm08c05
		if ( rm08c06 == 0 ) { rm08c06 = 22 };
		while ( rm08c06 > 22 ) { rm08c06 = rm08c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m08r1').textContent = convertToRoman(rm08c01);
			document.getElementById('m08a01').textContent = convertToSub(rm08c01);
			document.getElementById('m08i01').src = pimg[rm08c01];

		document.getElementById('m08r2').textContent = convertToRoman(rm08c02);
			document.getElementById('m08a02').textContent = convertToSub(rm08c02);
			document.getElementById('m08i02').src = pimg[rm08c02];

		document.getElementById('m08r3').textContent = convertToRoman(rm08c03);
			document.getElementById('m08a03').textContent = convertToSub(rm08c03);
			document.getElementById('m08i03').src = pimg[rm08c03];

		document.getElementById('m08r4').textContent = convertToRoman(rm08c04);
			document.getElementById('m08a04').textContent = convertToSub(rm08c04);
			document.getElementById('m08i04').src = pimg[rm08c04];

		document.getElementById('m08r5').textContent = convertToRoman(rm08c05);
			document.getElementById('m08a05').textContent = convertToSub(rm08c05);
			document.getElementById('m08i05').src = pimg[rm08c05];

		document.getElementById('m08r6').textContent = convertToRoman(rm08c06);
			document.getElementById('m08a06').textContent = convertToSub(rm08c06);
			document.getElementById('m08i06').src = pimg[rm08c06];


		// =========== MONTH 9

		// [1] Месяц года
		rm09c01 = 9;

		// [2] Сумма цифр года
		rm09c02 = yearsum;
		while ( rm09c02 > 22 ) { rm09c02 = rm09c02 - 22 };

		// [3]
		rm09c03 = rm09c01 + rm09c02
		if ( rm09c03 == 0 ) { rm09c03 = 22 };
		while ( rm09c03 > 22 ) { rm09c03 = rm09c03 - 22 };

		// [4]
		rm09c04 = 9 + parseInt(birthmonth1);
		while ( rm09c04 > 22 ) { rm09c04 = rm09c04 - 22 };

		// [5]
		rm09c05 = birthyearsum + yearsum;
		while ( rm09c05 > 22 ) { rm09c05 = rm09c05 - 22 };

		// [6]
		rm09c06 = rm09c04 + rm09c05
		if ( rm09c06 == 0 ) { rm09c06 = 22 };
		while ( rm09c06 > 22 ) { rm09c06 = rm09c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m09r1').textContent = convertToRoman(rm09c01);
			document.getElementById('m09a01').textContent = convertToSub(rm09c01);
			document.getElementById('m09i01').src = pimg[rm09c01];

		document.getElementById('m09r2').textContent = convertToRoman(rm09c02);
			document.getElementById('m09a02').textContent = convertToSub(rm09c02);
			document.getElementById('m09i02').src = pimg[rm09c02];

		document.getElementById('m09r3').textContent = convertToRoman(rm09c03);
			document.getElementById('m09a03').textContent = convertToSub(rm09c03);
			document.getElementById('m09i03').src = pimg[rm09c03];

		document.getElementById('m09r4').textContent = convertToRoman(rm09c04);
			document.getElementById('m09a04').textContent = convertToSub(rm09c04);
			document.getElementById('m09i04').src = pimg[rm09c04];

		document.getElementById('m09r5').textContent = convertToRoman(rm09c05);
			document.getElementById('m09a05').textContent = convertToSub(rm09c05);
			document.getElementById('m09i05').src = pimg[rm09c05];

		document.getElementById('m09r6').textContent = convertToRoman(rm09c06);
			document.getElementById('m09a06').textContent = convertToSub(rm09c06);
			document.getElementById('m09i06').src = pimg[rm09c06];


		// =========== MONTH 10

		// [1] Месяц года
		rm10c01 = 10;

		// [2] Сумма цифр года
		rm10c02 = yearsum;
		while ( rm10c02 > 22 ) { rm10c02 = rm10c02 - 22 };

		// [3]
		rm10c03 = rm10c01 + rm10c02
		if ( rm10c03 == 0 ) { rm10c03 = 22 };
		while ( rm10c03 > 22 ) { rm10c03 = rm10c03 - 22 };

		// [4]
		rm10c04 = 10 + parseInt(birthmonth1);
		while ( rm10c04 > 22 ) { rm10c04 = rm10c04 - 22 };

		// [5]
		rm10c05 = birthyearsum + yearsum;
		while ( rm10c05 > 22 ) { rm10c05 = rm10c05 - 22 };

		// [6]
		rm10c06 = rm10c04 + rm10c05
		if ( rm10c06 == 0 ) { rm10c06 = 22 };
		while ( rm10c06 > 22 ) { rm10c06 = rm10c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m10r1').textContent = convertToRoman(rm10c01);
			document.getElementById('m10a01').textContent = convertToSub(rm10c01);
			document.getElementById('m10i01').src = pimg[rm10c01];

		document.getElementById('m10r2').textContent = convertToRoman(rm10c02);
			document.getElementById('m10a02').textContent = convertToSub(rm10c02);
			document.getElementById('m10i02').src = pimg[rm10c02];

		document.getElementById('m10r3').textContent = convertToRoman(rm10c03);
			document.getElementById('m10a03').textContent = convertToSub(rm10c03);
			document.getElementById('m10i03').src = pimg[rm10c03];

		document.getElementById('m10r4').textContent = convertToRoman(rm10c04);
			document.getElementById('m10a04').textContent = convertToSub(rm10c04);
			document.getElementById('m10i04').src = pimg[rm10c04];

		document.getElementById('m10r5').textContent = convertToRoman(rm10c05);
			document.getElementById('m10a05').textContent = convertToSub(rm10c05);
			document.getElementById('m10i05').src = pimg[rm10c05];

		document.getElementById('m10r6').textContent = convertToRoman(rm10c06);
			document.getElementById('m10a06').textContent = convertToSub(rm10c06);
			document.getElementById('m10i06').src = pimg[rm10c06];


		// =========== MONTH 11

		// [1] Месяц года
		rm11c01 = 11;

		// [2] Сумма цифр года
		rm11c02 = yearsum;
		while ( rm11c02 > 22 ) { rm11c02 = rm11c02 - 22 };

		// [3]
		rm11c03 = rm11c01 + rm11c02
		if ( rm11c03 == 0 ) { rm11c03 = 22 };
		while ( rm11c03 > 22 ) { rm11c03 = rm11c03 - 22 };

		// [4]
		rm11c04 = 11 + parseInt(birthmonth1);
		while ( rm11c04 > 22 ) { rm11c04 = rm11c04 - 22 };

		// [5]
		rm11c05 = birthyearsum + yearsum;
		while ( rm11c05 > 22 ) { rm11c05 = rm11c05 - 22 };

		// [6]
		rm11c06 = rm11c04 + rm11c05
		if ( rm11c06 == 0 ) { rm11c06 = 22 };
		while ( rm11c06 > 22 ) { rm11c06 = rm11c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m11r1').textContent = convertToRoman(rm11c01);
			document.getElementById('m11a01').textContent = convertToSub(rm11c01);
			document.getElementById('m11i01').src = pimg[rm11c01];

		document.getElementById('m11r2').textContent = convertToRoman(rm11c02);
			document.getElementById('m11a02').textContent = convertToSub(rm11c02);
			document.getElementById('m11i02').src = pimg[rm11c02];

		document.getElementById('m11r3').textContent = convertToRoman(rm11c03);
			document.getElementById('m11a03').textContent = convertToSub(rm11c03);
			document.getElementById('m11i03').src = pimg[rm11c03];

		document.getElementById('m11r4').textContent = convertToRoman(rm11c04);
			document.getElementById('m11a04').textContent = convertToSub(rm11c04);
			document.getElementById('m11i04').src = pimg[rm11c04];

		document.getElementById('m11r5').textContent = convertToRoman(rm11c05);
			document.getElementById('m11a05').textContent = convertToSub(rm11c05);
			document.getElementById('m11i05').src = pimg[rm11c05];

		document.getElementById('m11r6').textContent = convertToRoman(rm11c06);
			document.getElementById('m11a06').textContent = convertToSub(rm11c06);
			document.getElementById('m11i06').src = pimg[rm11c06];


		// =========== MONTH 12

		// [1] Месяц года
		rm12c01 = 12;

		// [2] Сумма цифр года
		rm12c02 = yearsum;
		while ( rm12c02 > 22 ) { rm12c02 = rm12c02 - 22 };

		// [3]
		rm12c03 = rm12c01 + rm12c02
		if ( rm12c03 == 0 ) { rm12c03 = 22 };
		while ( rm12c03 > 22 ) { rm12c03 = rm12c03 - 22 };

		// [4]
		rm12c04 = 12 + parseInt(birthmonth1);
		while ( rm12c04 > 22 ) { rm12c04 = rm12c04 - 22 };

		// [5]
		rm12c05 = birthyearsum + yearsum;
		while ( rm12c05 > 22 ) { rm12c05 = rm12c05 - 22 };

		// [6]
		rm12c06 = rm12c04 + rm12c05
		if ( rm12c06 == 0 ) { rm12c06 = 22 };
		while ( rm12c06 > 22 ) { rm12c06 = rm12c06 - 22 };

		// Выводим результат на экран
		document.getElementById('m12r1').textContent = convertToRoman(rm12c01);
			document.getElementById('m12a01').textContent = convertToSub(rm12c01);
			document.getElementById('m12i01').src = pimg[rm12c01];

		document.getElementById('m12r2').textContent = convertToRoman(rm12c02);
			document.getElementById('m12a02').textContent = convertToSub(rm12c02);
			document.getElementById('m12i02').src = pimg[rm12c02];

		document.getElementById('m12r3').textContent = convertToRoman(rm12c03);
			document.getElementById('m12a03').textContent = convertToSub(rm12c03);
			document.getElementById('m12i03').src = pimg[rm12c03];

		document.getElementById('m12r4').textContent = convertToRoman(rm12c04);
			document.getElementById('m12a04').textContent = convertToSub(rm12c04);
			document.getElementById('m12i04').src = pimg[rm12c04];

		document.getElementById('m12r5').textContent = convertToRoman(rm12c05);
			document.getElementById('m12a05').textContent = convertToSub(rm12c05);
			document.getElementById('m12i05').src = pimg[rm12c05];

		document.getElementById('m12r6').textContent = convertToRoman(rm12c06);
			document.getElementById('m12a06').textContent = convertToSub(rm12c06);
			document.getElementById('m12i06').src = pimg[rm12c06];




}

function convertToRoman(num) {
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let roman = '';

	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			roman += key;
			num -= romanNumerals[key];
		}
	}

	return roman;
}


function convertToSub(card) {
	const SubNumerals = {
		1: 'M ☿ 🧘',
		2: 'Ж ☾ 🧘',
		3: 'Ж ♀ 🌳',
		4: 'М ♈️ 🌳',
		5: 'М ♉️ 🧘',
		6: 'Н ♊️ 🌳',
		7: 'М ♋️ 🧘',
		8: 'Ж ♎️ 🌳',
		9: 'Н ♍ 🧘',
		10: 'Н ♃ 🌳',
		11: 'М ♌️ 🌳',
		12: 'Н ♆ 🧘',
		13: 'Ж ♏️ 🧘',
		14: 'Н ♐️ 🧘',
		15: 'М ♑️ 🌳',
		16: 'Н ♂ 🌳',
		17: 'Ж ♒️ 🧘',
		18: 'Ж ♓️ 🌳',
		19: 'М ☉ 🧘',
		20: 'Н ♇ 🌳',
		21: 'Н ♄ 🧘',
		22: 'Н ♅ 🌳',
	};

	return SubNumerals[card];
}

document.addEventListener('DOMContentLoaded', function() {
    // Находим поле input по id "sname"
    const inputField = document.getElementById('username');

    // Добавляем обработчик события input
    inputField.addEventListener('input', function() {
        // Получаем все элементы с классом uname
        const spanElements = document.querySelectorAll('span.uname');
        
        // Обновляем текст внутри каждого найденного элемента
        spanElements.forEach(function(span) {
            span.textContent = inputField.value;
        });
    });
});
