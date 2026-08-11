import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

class Main {
    public static void main(String[] args) {

        // ! VARIABLES
        // =================================================================================
        // int age = 19;
        // long number = 19209898398L;
        // double price = 99.99;
        // boolean flag = true;
        // char letter = 'A';
        // String name = "Akash";

        // System.out.println(age);
        // System.out.println(price);
        // System.out.println(number);
        // System.out.println(flag);
        // System.out.println(name);
        // System.out.println(letter);

        // System.out.println(add(10,20));

        // ! ARRAY
        // ===============================================================================
        // int[] arr = { 10, 20, 33, 40, 50, 30,5 };
        // int sum = 0;
        // int count = 0;
        // int max = arr[0];
        // int min = arr[0];
        // int target = 23;
        // // System.out.println(arr.length);

        // for (int x : arr) {
        // sum += x;

        // if (x % 2 == 0) {
        // count++;
        // }

        // if (max > x) {
        // max = x;
        // }

        // if (min < x) {
        // max = x;
        // }

        // if(x==target){
        // System.out.println(target+ " is found");
        // }else{
        // System.out.println(target+ " is not found");
        // }

        // }
        // System.out.println("the sum "+sum);
        // System.out.println("total count "+count);
        // System.out.println("max number is " + max);
        // System.out.println("min number is " + min);

        // ! question: REVERSE AN ARRAY
        // System.out.println(Arrays.toString(reverse(new int[] { 1, 2, 0, 3, 4, 5, 7 })));
        
        // ! question: 2nd largest
        System.out.println(secondLargest(new int[] {30,30,30, 5, 20, 8, 15}));
    }

    // ! METHODS
    // =================================================================================
    // static int add(int a, int b) {
    // return a + b;
    // }

    // static int[] reverse(int[] arr) {
    //     int left = 0;
    //     int right = arr.length - 1;

    //     while (left < right) {
    //         int temp = arr[left];
    //         arr[left] = arr[right];
    //         arr[right] = temp;

    //         left++;
    //         right--;
    //     }

    //     return arr;

    // }

    static int secondLargest(int[] arr){
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {
            if (largest<arr[i]) {
                secondLargest = largest;
                largest = arr[i];
            }else{
                if (secondLargest<arr[i] && largest!=arr[i]) {
                    secondLargest = arr[i];
                }
            }
        }

        return secondLargest;
    }
}