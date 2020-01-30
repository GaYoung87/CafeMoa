package com.latte.admin.web.dto.cafe;

import com.latte.admin.domain.cafe.Cafe;

public class CafeResponseDto {

    private Long ccid;
    private String cname;
    private String cloc;
    private String cphone;
    private String cpic;
    private String copen;
    private String cclose;
    private String cdesc;
    private String cstatus;
    private Long uuid;

    public CafeResponseDto(Cafe entity) {
        this.ccid = entity.getCcid();
        this.cname = entity.getCname();
        this.cloc = entity.getCloc();
        this.cphone = entity.getCphone();
        this.cpic = entity.getCpic();
        this.copen = entity.getCopen();
        this.cclose = entity.getCclose();
        this.cdesc = entity.getCdesc();
        this.cstatus = entity.getCstatus();
        this.uuid = entity.getUser().getUuid();

    }
}