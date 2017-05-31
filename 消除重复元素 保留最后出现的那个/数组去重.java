import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
	public static void main(String[] args){
		Scanner in = new Scanner(System.in);
		int len = 0;
		while(in.hasNextLine()){
			len = Integer.parseInt(in.nextLine());
			String[] strArr = in.nextLine().split(" ");//变为数组
            
			List<String> list = new ArrayList<>(); 
			for(int i = strArr.length - 1; i > -1; i--){
				if(!list.contains(strArr[i])){
					list.add(strArr[i]);
				}
               
			}
			//颠倒数组
		    int index= list.size() - 1;
		    while(index >= 0){
		    	System.out.print(list.get(index));
		    	if(index != 0){
		    		System.out.print(" ");//行末不要空格
		    	}
		    	index--;
		    }
		}
	}
}