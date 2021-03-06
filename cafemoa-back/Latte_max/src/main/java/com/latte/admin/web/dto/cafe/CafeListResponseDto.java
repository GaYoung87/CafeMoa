package com.latte.admin.web.dto.cafe;

import com.latte.admin.domain.cafe.Cafe;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CafeListResponseDto {
    private Long ccid;
    private String cname;
    private String cloc;
    private String cphone;
    private String cpic;
    private String copen;
    private String cclose;
    private String cdesc;
    private int cstatus;
    private int coperation;
    private LocalDateTime createdDate;
    private String latitude;
    private String longitude;


    public CafeListResponseDto(Cafe entity) {
        this.ccid=entity.getCcid();
        this.cname=entity.getCname();
        this.cloc=entity.getCloc();
        this.cphone=entity.getCphone();
        this.cpic=entity.getCpic();
        this.copen=entity.getCopen();
        this.cclose=entity.getCclose();
        this.cdesc=entity.getCdesc();
        this.cstatus=entity.getCstatus();
        this.coperation=entity.getCoperation();
        this.createdDate=entity.getCreatedDate();
        this.latitude=entity.getLatitude();
        this.longitude=entity.getLongitude();
    }
}