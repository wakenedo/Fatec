package com.example.app04;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class ImgAdapter extends BaseAdapter {

    Context context;
    String nameList[];
    int imgList[];
    LayoutInflater inflater;

    public ImgAdapter(Context context, String[] nameList, int[] imgList) {
        this.context = context;
        this.nameList = nameList;
        this.imgList = imgList;
        inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return imgList.length;
    }

    @Override
    public Object getItem(int i) {
        return null;
    }

    @Override
    public long getItemId(int i) {
        return 0;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        view = inflater.inflate(R.layout.list_model_2, null);
        TextView text1 = (TextView) view.findViewById(R.id.textView5);
        TextView text2 = (TextView) view.findViewById(R.id.textView6);
        ImageView img = (ImageView) view.findViewById(R.id.imageView3);
        text1.setText(""+i);
        text2.setText(nameList[i]);
        img.setImageResource(imgList[i]);
        return view;
    }
}
