#include <stdio.h>

int main() {
    double num1, num2, result;
    char operator;

    printf("Enter first number: ");
    scanf("%lf", &num1);

    printf("Enter second number: ");
    scanf("%lf", &num2);

    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &operator);   // space before %c handles newline

    switch (operator) {
        case '+':
            result = num1 + num2;
            printf("Result = %.2lf", result);
            break;

        case '-':
            result = num1 - num2;
            printf("Result = %.2lf", result);
            break;

        case '*':
            result = num1 * num2;
            printf("Result = %.2lf", result);
