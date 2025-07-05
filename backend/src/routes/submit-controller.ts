import db from "../db";
import { Request, Response } from "express";
import { transporter } from "../mailer";

export class SubmitContactController {
  static async handler(req: Request, res: Response) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ message: "Todos os campos são obrigatórios." });
      return;
    }

    try {
      await new Promise<void>((resolve, reject) => {
        db.run(
          "INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)",
          [name, email, message],
          function (err) {
            if (err) {
              console.error("Erro ao inserir no DB:", err.message);
              return reject(new Error("Erro ao salvar no banco de dados."));
            }
            resolve();
          }
        );
      });

      await transporter.sendMail({
        from: '"Eco Recitec" <no-reply@ecorecitec.com>',
        to: email,
        subject: "Confirmação de Recebimento de Contato - Eco Recitec",
        html: `
          <div style="font-family: Arial, sans-serif; color: #222;">
          <h2 style="color: #2e7d32;">Contato Recebido com Sucesso</h2>
          <p>Olá <strong>${name}</strong>,</p>
          <p>Agradecemos por entrar em contato com a Eco Recitec.</p>
          <p>Recebemos sua mensagem e nossa equipe irá analisá-la em breve.</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
          <p><strong>Mensagem enviada:</strong></p>
          <blockquote style="background: #f9f9f9; border-left: 4px solid #2e7d32; margin: 8px 0; padding: 8px 16px;">${message}</blockquote>
          <p>Se precisar de mais informações, fique à vontade para responder este e-mail.</p>
          <br>
          <p>Atenciosamente,<br>
          Equipe Eco Recitec</p>
          <p style="font-size: 12px; color: #888;">Esta é uma mensagem automática. Por favor, não responda diretamente a este e-mail.</p>
          <p style="font-size: 12px; color: #888; margin-top: 8px;">Teste técnico feito por Jonatham Luz. Para mais informações entre em contato via <a href="mailto:jonathamcordeiro42@gmail.com">jonathamcordeiro42@gmail.com</a></p>
          </div>
        `,
      });

      res.status(201).json({ message: "Dados recebidos e salvos com sucesso!" });
      return;
    } catch (error: any) {
      console.error("Error during submission:", error.message);
      res.status(500).json({ message: error.message || "Internal server error." });
      return;
    }
  }
}
