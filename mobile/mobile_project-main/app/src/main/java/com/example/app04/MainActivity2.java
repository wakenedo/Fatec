package com.example.app04;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;

public class MainActivity2 extends AppCompatActivity {

    String nameList[] = {"Cascão", "Gordão", "Bob", "Morpheus", "Veinho", "Bicheiro"};

    int imgList[] = {
            R.drawable.two,
            R.drawable.three,
            R.drawable.four,
            R.drawable.five,
            R.drawable.six,
            R.drawable.seven};

    ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        listView = (ListView) findViewById(R.id.listView);
        ImgAdapter adapter = new ImgAdapter(getApplicationContext(), nameList, imgList);
        listView.setAdapter(adapter);

        final TextView selected = (TextView) findViewById(R.id.textView8);
        final Button btn = (Button) findViewById(R.id.button);
        Bundle bundle = new Bundle();

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    int cod = Integer.parseInt(selected.getText().toString());
                    Intent intent = new Intent(MainActivity2.this, MainActivity3.class);

                    switch (cod){
                        case 0:
                            bundle.putInt("cod", 0);
                            bundle.putString("name", nameList[0]);
                            intent.putExtras(bundle);
                            startActivity(intent);
                            break;

                        case 1:
                            bundle.putInt("cod", 1);
                            bundle.putString("name", nameList[1]);
                            intent.putExtras(bundle);
                            startActivity(intent);
                            break;

                        case 2:
                            bundle.putInt("cod", 2);
                            bundle.putString("name", nameList[2]);
                            intent.putExtras(bundle);
                            startActivity(intent);
                            break;

                        case 3:
                            bundle.putInt("cod", 3);
                            bundle.putString("name", nameList[3]);
                            intent.putExtras(bundle);
                            startActivity(intent);
                            break;

                        case 4:
                            bundle.putInt("cod", 4);
                            bundle.putString("name", nameList[4]);
                            intent.putExtras(bundle);
                            startActivity(intent);
                            break;

                        case 5:
                            bundle.putInt("cod", 5);
                            bundle.putString("name", nameList[5]);
                            intent.putExtras(bundle);
                            startActivity(intent);
                            break;
                    }

                }
                catch (Exception e){

                }

            }
        });

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                selected.setText(""+i);
            }
        });
    }
}