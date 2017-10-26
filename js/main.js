function Calc (str) {
    var RegExGaps = /\s/g,
        incStr    = '(' + str + ')',
        Operands  = [],
        Functions = [],
        position  = 0,
        token     = {},
        prevToken = '';
    
    this.canPop = function (op1, Functions) {
        if (Functions.length == 0) return false;

        var p1 = getPriority( op1 ),
            p2 = getPriority( Functions[Functions.length - 1] );
    
        return p1 >= 0 && p2 >= 0 && p1 >= p2;
    };
    
    this.getPriority = function (operand) {
        switch (operand) {
            case '(': return -1;
            case '*': return 1;
            case '/': return 1;
            case '+': return 2;
            case '-': return 2;
        };
    };
    
    this.IsDigit = function (s) {
        return (!isNaN(s) && s.length === 1) ? true : false;
    };

    incStr = incStr.replace(RegExGaps, '');

    while (token != null) {

        if (position === incStr.length) {
            token = null;
        };

        if(IsDigit(incStr[position])) {
            var res = "";

            while (position < incStr.length && (IsDigit(incStr[position]) || incStr[position] == '.')) {
                res += incStr[position++];
            }

            token = Number(res);
        } else {
            token = incStr[position++];
        };

        if ( typeof token === 'string'     && 
             typeof prevToken === 'string' &&
             prevToken.toString() == '('   &&
             (token.toString() == '+' || token.toString() == '-')
           ) 
        {
            Operands.push(0);
        }

        if (typeof token === 'number') {            
            Operands.push( Number(token) );
        } else if (typeof token === 'string') { 
            if (token.toString() == ')') {
                while (Functions.length > 0 && Functions[Functions.length - 1] != '(') {
                    var B = Operands.pop(),
                        A = Operands.pop();

                    switch (Functions.pop())
                    {
                        case '+': Operands.push(A + B);
                                  break;
                        case '-': Operands.push(A - B);
                                  break;
                        case '*': Operands.push(A * B);
                                  break;
                        case '/': Operands.push(A / B);
                                  break;
                    }
                }
                Functions.pop();
            } else {
                while (canPop(token.toString(), Functions)) {                    
                    var B = Operands.pop(),
                        A = Operands.pop();

                    switch (Functions.pop()) {
                        case '+': Operands.push(A + B);
                                  break;
                        case '-': Operands.push(A - B);
                                  break;
                        case '*': Operands.push(A * B);
                                  break;
                        case '/': Operands.push(A / B);
                                  break;
                    };
                };
                Functions.push(token.toString());
            }
        }
        prevToken = token;
    };

    if (Operands.length > 1 || Functions.length > 0) {
        console.error("Ошибка в разборе выражения");
        return 'error';
    };

    return Operands.pop();
};

$( document ).ready(function() {
    var screen      = $('.screen-container .screen'),
        screenValue = '';
    
    screen.html(0);
    
    $('button.btn').click(function() {
        screenValue += $(this).html();
        screen.html(screenValue);
    });

    $('button.result').click(function() {
        var result = Calc(screenValue);
        screen.html(result);
        screenValue = '';
    });

    $('button.clear').click(function() {
        screenValue = '';
        screen.html(0);
    });

    $('button.power').click(function() {
        if(screen.html().length > 0) {
            screenValue = '';
            screen.html('');
        } else {
            screenValue = '';
            screen.html(0);
        };
    });
});