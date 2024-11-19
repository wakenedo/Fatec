package com.example.app04;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity3 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);

        Bundle bundle = getIntent().getExtras();
        int cod = bundle.getInt("cod");
        String name = bundle.getString("name");

        final ImageView img = (ImageView) findViewById(R.id.imageView4);
        final TextView txt = (TextView) findViewById(R.id.textView7);
        final TextView txt2 = (TextView) findViewById(R.id.textView9);

        switch (cod){

            case 0:
                img.setImageResource(R.drawable.two);
                txt.setText(name);
                txt2.setText("*Taxa de Juros: 14%\n*Não agride\n*Ameaça quando necessário\n*Aceita qualquer coisa para quitação");
                break;

            case 1:
                img.setImageResource(R.drawable.three);
                txt.setText(name);
                txt2.setText("*Taxa de Juros: 13%\n*Um pouco violento\n*Aceita apenas dinheiro, imóvel, carro e moto");
                break;

            case 2:
                img.setImageResource(R.drawable.four);
                txt.setText(name);
                txt2.setText("*Taxa de Juros: 12%\n*Não mede esforços para utilizar violência\n*Ameaça toda a família\n*Aceita apenas dinheiro\n*Parcela a dívida");
                break;

            case 3:
                img.setImageResource(R.drawable.five);
                txt.setText(name);
                txt2.setText("*Taxa de Juros: 11%\n*Miliciano\n*Toma tudo que você tem");
                break;

            case 4:
                img.setImageResource(R.drawable.six);
                txt.setText(name);
                txt2.setText("*Taxa de Juros: 10%\n*Compreensivo, mas não pise na bola\n*Empresta altas quantias\n*Aceita imóvel, carro e moto se bem conservado");
                break;

            case 5:
                img.setImageResource(R.drawable.seven);
                txt.setText(name);
                txt2.setText("*Taxa de Juros: 10%\n*Envolvido em todo tipo de esquema\n*Muito influente\n*Não deixe atrasar\n*Utiliza da violência e ameaça\n*Toma tudo seu\n*Tem vários capangas");
                break;

        }
    }
}