"use client";

import { ViewTransition, startTransition, useDeferredValue, useState } from "react";
import { menuCollections } from "../_data/cafe-data";

export function MenuExperience() {
  const [activeId, setActiveId] = useState(menuCollections[0].id);
  const deferredActiveId = useDeferredValue(activeId);
  const activeCollection =
    menuCollections.find((collection) => collection.id === deferredActiveId) ??
    menuCollections[0];

  return (
    <section id="menu" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.25)] lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d9a86d]">
              Interactive Menu
            </p>
            <h2 className="max-w-lg text-4xl leading-tight font-semibold text-white sm:text-5xl">
              Một cụm tương tác để người dùng chạm, đổi trạng thái và khám phá.
            </h2>
            <p className="max-w-md text-base leading-8 text-white/58">
              Phần này dùng `startTransition`, `useDeferredValue` và
              `ViewTransition` để đổi bộ menu theo cách mềm, không giật, có cảm
              giác chuyển lớp nội dung.
            </p>
            <div className="grid gap-3">
              {menuCollections.map((collection) => {
                const isActive = activeId === collection.id;

                return (
                  <button
                    key={collection.id}
                    type="button"
                    onClick={() =>
                      startTransition(() => {
                        setActiveId(collection.id);
                      })
                    }
                    className={`group rounded-[1.6rem] border px-5 py-4 text-left transition duration-300 ${
                      isActive
                        ? "border-[rgba(240,199,143,0.34)] bg-[rgba(240,199,143,0.1)] text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                        : "border-white/10 bg-black/14 text-white/68 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/6"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold">{collection.label}</p>
                        <p className="mt-1 text-sm text-inherit/70">{collection.note}</p>
                      </div>
                      <span
                        className={`h-3 w-3 rounded-full transition ${
                          isActive ? "bg-[#efc789]" : "bg-white/18 group-hover:bg-white/35"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <ViewTransition
            key={deferredActiveId}
            name="menu-panel"
            share="auto"
            enter="auto"
            default="none"
          >
            <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(237,190,126,0.14),transparent_30%),rgba(10,8,8,0.55)] p-6 lg:p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#f0c78f]">
                    {activeCollection.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    {activeCollection.note}
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-7 text-white/58">
                  {activeCollection.description}
                </p>
              </div>
              <div className="mt-6 grid gap-4">
                {activeCollection.items.map((item) => (
                  <article
                    key={item.name}
                    className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(239,199,137,0.28)] hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/40">
                          {item.meta}
                        </p>
                      </div>
                      <span className="rounded-full border border-[rgba(240,199,143,0.26)] bg-[rgba(240,199,143,0.08)] px-3 py-1 text-sm font-medium text-[#ffdcae]">
                        {item.price}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ViewTransition>
        </div>
      </div>
    </section>
  );
}
