import { AlertOctagon } from 'lucide-react';

export function SecurityWarningBox() {
  return (
    <div className="bg-[#FFF4E5] border-3 border-[#171717] shadow-[5px_5px_0px_#171717] p-5 my-8">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-[#FFAA00] border-2 border-[#171717] shrink-0">
          <AlertOctagon className="w-5 h-5 text-[#171717]" />
        </div>
        <div>
          <h4 className="font-heading font-black text-base text-[#171717] uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
            Peringatan Keamanan &amp; Perlindungan Aset
          </h4>
          <ul className="text-xs sm:text-sm text-neutral-800 space-y-1.5 font-medium leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-red-600">⚠</span>
              <span>
                <strong>JANGAN PERNAH</strong> membagikan Seed Phrase atau Private Key kepada siapa pun dengan alasan apa pun.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-red-600">⚠</span>
              <span>
                Gunakan <strong>Burner Wallet</strong> (dompet terpisah dengan saldo minimal) khusus saat berinteraksi dengan smart contract baru.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-red-600">⚠</span>
              <span>
                Verifikasi URL situs secara mandiri. Jangan pernah mempercayai tautan dari Direct Message (DM) Discord atau balasan Twitter.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
