import java.util.Arrays;

class Main {
    static int[] reverse(int[] arr) {
        int left = 0;
        int right = arr.length - 1;

        while (right > left) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

        return arr;
    }

    public static void main(String[] args) {
        System.out.println("reverse array "+Arrays.toString(reverse(new int[] { 1, 2, 3, 4, 5 })));
    }

}