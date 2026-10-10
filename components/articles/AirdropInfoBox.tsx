import React from 'react';
import { AirdropDetails } from '@/types/article';
import {
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Layers,
  Coins,
  CalendarCheck,
  ListChecks,
  Shield,
} from 'lucide-react';

interface Props {
  details: AirdropDetails;
}

export function AirdropInfoBox({ details }: Props) {
  return (
    <div className="bg-[#FFFDF0] border-3 border-[#171717] shadow-[5px_5px_0px_#171717] p-6 my-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b-2.5 border-[#171717] pb-4 mb-5 flex-wrap">
        <div>
          <span className="neo-badge bg-[#171717] text-[#FFE45C] text-[11px] font-black uppercase mb-1">
            Data Campaign Terverifikasi
          </span>
          <h3 className="font-heading font-black text-xl text-[#171717]">
            {details.projectName}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="neo-badge bg-[#B8F28B] text-[#171717] text-xs font-black uppercase flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Status: {details.status}
          </span>
        </div>
      </div>

      {/* Grid details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div className="p-3 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 mb-1">
            <Layers className="w-4 h-4 text-[#171717]" />
            Jaringan Blockchain:
          </div>
          <div className="font-heading font-bold text-sm text-[#171717]">
            {details.blockchain}
          </div>
        </div>

        <div className="p-3 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 mb-1">
            <Coins className="w-4 h-4 text-[#171717]" />
            Estimasi Biaya &amp; Risiko Modal:
          </div>
          <div className="font-heading font-bold text-sm text-[#171717]">
            {details.costRisk}
          </div>
        </div>

        <div className="p-3 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] md:col-span-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 mb-1">
            <CalendarCheck className="w-4 h-4 text-[#171717]" />
            Tanggal Verifikasi Informasi:
          </div>
          <div className="font-heading font-bold text-sm text-[#171717]">
            {new Date(details.verifiedDate).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            <span className="text-xs font-normal text-neutral-600">
              (Data dicek berkala oleh Tim Editorial AirdropNews)
            </span>
          </div>
        </div>
      </div>

      {/* Participation Requirements */}
      {details.participationRequirements?.length > 0 && (
        <div className="mb-5">
          <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            Syarat Partisipasi
          </h4>
          <ul className="space-y-1.5 bg-white border-2 border-[#171717] p-3 text-xs sm:text-sm font-semibold text-neutral-800">
            {details.participationRequirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-700 font-black">✓</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Steps */}
      {details.steps?.length > 0 && (
        <div className="mb-5">
          <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#171717] mb-2 flex items-center gap-1.5">
            <ListChecks className="w-4 h-4" />
            Langkah-Langkah Pelaksanaan
          </h4>
          <ol className="space-y-2 bg-white border-2 border-[#171717] p-3 text-xs sm:text-sm font-semibold text-neutral-800 list-decimal list-inside">
            {details.steps.map((step, i) => (
              <li key={i} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Official Link & Warning note */}
      <div className="flex items-center justify-between gap-4 pt-3 border-t-2 border-dashed border-[#171717] flex-wrap">
        <div className="text-xs font-bold text-amber-900 flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
          <span>Informasi dapat berubah sewaktu-waktu sesuai kebijakan developer.</span>
        </div>

        {details.officialWebsite && (
          <a
            href={details.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn bg-[#8EC5FF] hover:bg-[#72b5ff] text-[#171717] px-3 py-1.5 text-xs font-black inline-flex items-center gap-1"
          >
            <span>Sumber Resmi Proyek</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
